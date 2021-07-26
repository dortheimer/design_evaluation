import React from "react";
import Container from "@material-ui/core/Container";
import Rating from "./Rating.jsx";

class ListAll extends Rating {
  render() {
    const { artifacts } = this.state;

    return (
      <Container>
        {artifacts && artifacts.map((artifact) => this.renderCouple(artifact))}
      </Container>
    );
  }
}

export default ListAll;
