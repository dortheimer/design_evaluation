import config from "config";
import Sequelize  from "sequelize";
import artifactFactory from "./artifact.js"
import artifactRatingFactory from "./artifactrating.js"


// const env = process.env.NODE_ENV || 'development';
const dbConfig = config.get("server.db");

export default Sequelize;

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

export const Artifact = artifactFactory(sequelize, Sequelize.DataTypes);
export const ArtifactRatings = artifactRatingFactory(sequelize, Sequelize.DataTypes);
