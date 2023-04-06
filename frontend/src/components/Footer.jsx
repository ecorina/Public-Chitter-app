import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div
      className="Footer"
      style={{
        left: "0",
        bottom: "0",
        textAlign: "center",
        padding: "5px",
        width: "100%",
        backgroundColor: "#662EED",
        marginTop: "10px",
        position: "fixed",
      }}
    >
      <a
        data-testid="github-link"
        href="https://github.com/ecorina"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#FAF5FF", marginRight: "15px", fontSize: "20px" }}
        />
      </a>
      <a data-testid="email-link" href="mailto:ecorina.serban@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: "#FAF5FF", marginRight: "15px", fontSize: "20px" }}
        />
      </a>
      <a
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/ecorinaserban"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#FAF5FF", fontSize: "20px" }}
        />
      </a>
    </div>
  );
}
