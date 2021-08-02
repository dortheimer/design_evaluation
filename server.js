import express from "express";
import session from "express-session";
import config from "config";
import path from "path";
import expressSessionFactory from 'express-session-sequelize';

import { Artifact, ArtifactRatings, sequelize } from "./db/models/index.js";

const serverConfig = config.get("server");

const app = express();
const port = serverConfig.port;
app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.set("trust proxy", 1); // trust first proxy

// route helper
const wrapper = (func) => {
  return (req, res, next) =>
    Promise.resolve()
      .then(() => func(req, res, next))
      .then((data) => res.json(data))
      .catch((err) => {
        console.error(err);
        res.status(err.status || 500).json(err.message);
      });
};




const SessionStore = expressSessionFactory(session.Store)
const sequelizeSessionStore = new SessionStore({
  db: sequelize,
});

app.use(
  session({
    secret: "designServer",
    resave: false,
    store: sequelizeSessionStore,
    saveUninitialized: true,
  })
);

app.get(
  "/api/artifacts",
  wrapper((req, res) => Artifact.findAll({
    attributes: ['idKey','description','embed','file','parentId']
  }))
);

app.get(
  "/api/ratings",
  wrapper((req, res) =>
    ArtifactRatings.findAll({
      attributes: ['idKey'],
      where: {
        accountId: req.session.id,
      },
    })
  )
);

app.post(
  "/api/ratings/",
  wrapper((req, res) =>
    ArtifactRatings.create({
      accountId: req.session.id,
      idKey: req.body.idKey,
      rating: req.body.rating,
    })
  )
);

app.use('/', express.static('build'))
// Serve react index file
app.use((req, res) => {
  res.sendFile(path.join(path.resolve(''), "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Design Evaluation app is running on port ${port}`);
});
