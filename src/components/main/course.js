import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Course extends Component {
    render() {
        const { info } = this.props;
        const link = "/learn/"+info.id;
        return(
            <div className="course">
                <div className="box-title">
                    <p>{info.name}</p>
                </div>
                <div className="box-summary">
                    <p>{info.explain}</p>
                </div>
                <div className="box-knowledge">
                    <p>{info.knowledge}</p>
                </div>
                <div className="inclass">
                    <Link to={link}> enter </Link>
                </div>
            </div>
        );
    }
}

export default Course;