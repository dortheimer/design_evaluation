import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Artifact from "../components/Artifact.jsx";
// import { Link } from "react-router-dom";

import axios from "axios";

const imagesPath = "http://localhost:4000/";

class Welcome extends Component {
  state = {
    artifacts: [],
    ratings: [],
    queue: [],
  };

  componentDidMount() {
    Promise.all([axios.get("/api/artifacts"), axios.get("/api/ratings/")])
      .then(([artifacts, ratings]) => {
        //sort by parentId
        artifacts.data.sort((a, b) => a.parentId < b.parentId);

        // create id arrays
        const artifactIds = artifacts.data.map((artifact) => artifact.idKey);
        const ratedIds = ratings.data.map((rating) => rating.idKey);
        const queue = artifactIds.filter((id) => !ratedIds.includes(id));

        this.setState({
          queue,
          artifacts: artifacts.data,
          ratings: ratings.data,
        });
      })
      .catch((error) => console.log(error));
  }

  rateArtifact = (idKey, rating) => {
    const { queue } = this.state;
    axios
      .post(`/api/ratings/`, { idKey, rating })
      .then((response) => {
        const newQueue = queue.filter((id) => id !== idKey);

        this.setState({
          queue: newQueue,
        });
      })
      .catch((error) => console.log(error));
  };

  getNewCurrentArtifact = () => {
    const { queue } = this.state;
    const index = Math.floor(Math.random() * queue.length);
    return this.getArtifact(queue[index]);
  };

  // method to get the current artifact
  getArtifact = (idKey) => {
    const { artifacts } = this.state;
    return artifacts.find((artifact) => artifact.idKey == idKey);
  };

  render() {
    const current = this.getNewCurrentArtifact();
    if (!current) {
      return <div>No designs to rate</div>;
    }
    const parent =
      current.parentId != current.idKey
        ? this.getArtifact(current.parentId)
        : null;

    return (
      <Container>
        <Grid container spacing={3}>
         
            {parent && (
               <Grid item xs={6}>
                <h1>Original design</h1>
                <Artifact {...parent} imagesPath={imagesPath} />
              </Grid>
            )}
          
          <Grid item xs={6}>
            <h1>New design</h1>

            <Artifact {...current} imagesPath={imagesPath} />
            {parent && <p>How much did the design improve of worsen:</p>}
            {!parent && <p>Rate the design</p>}
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              {["Terrible", "Bad", "Mediocre", "Good", "Awesome"].map((item, key) => (
                <Button
                  label="Worse quality"
                  key={`btn_${key}`}
                  onClick={() => this.rateArtifact(current.idKey, key + 1)}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Welcome;
