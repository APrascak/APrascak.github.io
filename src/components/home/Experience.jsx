import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import EnovaLogo from "../../editable-stuff/enovayeet.jpeg"
import UFloridaLogo from "../../editable-stuff/shouldwork.png"
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
  experience,
} from "../../editable-stuff/configurations.json";

const Experience = () => {
  const [resumeURL] = useState(Pdf);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
      <h1 className="display-4 pb-5">Experience</h1>
        <div className="row mb-4">
          {(
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={EnovaLogo}
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${"7"}`}>
            <h1 className="display-6 mb-2">{experience[0].company}</h1>
            <h4 className="display-8 mb-3">{experience[0].position}</h4>
            <p className="lead center">{experience[0].description}</p>
          </div>
        </div>
        <div className="row">
          {(
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={UFloridaLogo}
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${"7"}`}>
            <h1 className="display-6 mb-2">{experience[1].company}</h1>
            <h4 className="display-8 mb-3">{experience[1].position}</h4>
            <p className="lead center">{experience[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;