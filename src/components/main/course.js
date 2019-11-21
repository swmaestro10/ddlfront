import React, { Component } from "react";
import { Link } from "react-router-dom";

import howtouse from "../img/main_howtouse.png";

class Course extends Component {
  render() {
    const { info } = this.props;
    const link = "/learn/" + info.id;
    return (
      <div className="course">
        <div className="box-knowledge">
          <p> [기본 튜토리얼] </p>
          {/* <p>{info.knowledge}</p> */}
          <img
            className="tooltip"
            src={howtouse}
            alt="howtouse"
            height="30"
            width="30"
          />
        </div>
        <div className="box-title">
          <p> MNIST 체험 </p>
          {/* <p>{info.name}</p> */}
        </div>
        <div className="box-summary">{/* <p>{info.explain}</p> */}</div>
        <div className="inclass">
          <Link to={link}> enter </Link>
        </div>
      </div>
    );
  }
}

export default Course;
