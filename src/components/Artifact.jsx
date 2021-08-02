import React, {Component} from 'react';
import { Fragment } from 'react';


class Artifact extends Component {
    
    render() {
        const {idKey,description, embed, file, imagesPath} = this.props;

        return (
            <div>
              Artifact Id {idKey} <br />
              Description: {description}
                 {embed && (
              <iframe
                src={embed}
                title="preview"
                frameBorder="0"
                width="100%"
                height="500"
              />
            )}

            {file && file.endsWith(".dwg") && (
              <Fragment>
              <iframe
                title="preview"
                style={{ width: "100%", height: "300px" }}
                frameBorder="0"
                src={`//sharecad.org/cadframe/load?url=${imagesPath}${file}`}
                scrolling="no"
              />
              <a target="blank" href={`//sharecad.org/cadframe/load?url=${imagesPath}${file}`}>View</a>
              </Fragment>
            )}
             {file && file.endsWith(".pdf") && (
              <iframe
                title="preview"
                style={{ width: "100%", height: "300px" }}
                frameBorder="0"
                src={`${imagesPath}${file}`}
                scrolling="no"
              />
            )}
            {file && !file.endsWith(".dwg") && (
              <img
                style={{ width: "100%" }}
                src={imagesPath + file}
                alt="Idea"
              />
            )}
            </div>
        );
    }
}

Artifact.defaults = {
    embed: false,
    file: false,
};

export default Artifact;
