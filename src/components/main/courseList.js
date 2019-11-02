import React, { Component } from "react";
import { connect } from "react-redux";
import { GetClassAll } from "../../actions/classFunction";
import { withCookies } from "react-cookie";
import _ from "lodash";
import Course from "./course";

class CourseList extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    const token = this.props.user.token;
    cookies.set("token", token, { path: "/" });
  }
  componentDidMount() {
    this.props.GetClassAll(this.props.user.token, "all");
  }
  renderCourse() {
    return _.map(this.props.classAll, course => {
      return <Course key={course.id} info={course} />;
    });
  }
  render() {
    return (
      <div className="courselists">
        <h2 className="category">가능한 수업</h2>
        <div className="courselist">{this.renderCourse()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    classAll: state.classAll
  };
}

export default withCookies(
  connect(
    mapStateToProps,
    { GetClassAll }
  )(CourseList)
);
