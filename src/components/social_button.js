import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function SocialButton() {
  return (
    <div className="hero__social position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
      <div className="p-2">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>}
        >
          <a className="nav-link active" href="https://www.linkedin.com/in/kendall-andrey-fern%C3%A1ndez-siles-28478225b/" target="_blank">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </OverlayTrigger>
      </div>
      <div className="p-2">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="github-tooltip">GitHub</Tooltip>}
        >
          <a className="nav-link active" href="https://github.com/Dev-KendallAF" target="_blank">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default SocialButton;
