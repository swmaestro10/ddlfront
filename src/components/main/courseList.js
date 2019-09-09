import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetClassAll } from '../../actions/classFunction';
import _ from 'lodash';
import Course from './course';

class CourseList extends Component {
    componentDidMount() {
        this.props.GetClassAll(this.props.user.token, "all")
    }
    renderCourse() {
        return _.map(this.props.classAll, course => {
            return <Course key={course.id} info={course} />
        });
    }
    render() {
        return (
            <div className="courselist">
                {this.renderCourse()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        classAll: state.classAll
    }
}

export default connect(mapStateToProps, { GetClassAll })(CourseList);