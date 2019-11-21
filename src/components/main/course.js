import React, { Component } from "react";
import { Link } from "react-router-dom";

class Course extends Component {
  render() {
    const { info } = this.props;
    const link = "/learn/" + info.id;
    return (
      <div className="course">
        <div className="box-knowledge">
          {/* <p> [기본 튜토리얼] </p> */}
          <p>{info.knowledge}</p>
          <div className="tooltip">
            [ TIP ]
            <div>
              <p>뚝딱러닝 기본 튜토리얼</p> <p>블록 사용법 제공</p>
            </div>
          </div>
        </div>
        <div className="box-title">
          {/* <p> MNIST 체험 </p> */}
          <p>{info.name}</p>
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
