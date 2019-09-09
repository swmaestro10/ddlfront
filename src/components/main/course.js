import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Course extends Component {
    render() {
        const { info } = this.props;
        const link = "/learn/"+info.id;
        return(
            <div className="course">
                <h3>{info.name}</h3>
                <h5>{info.explain}</h5>
                <h6>{info.knowledge}</h6>
                <div className="inclass">
                    <Link to={link}> enter </Link>
                </div>
            </div>
        );
    }
}

export default Course;