import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Course extends Component {
    render() {
        const { info } = this.props;
        const link = "/learn/"+info.id;
        return(
            <div>
                <h6>id : {info.id}</h6>
                <p>explain : {info.explain}</p>
                <p>category : {info.category}</p>
                <p>knowledge : {info.knowledge}</p>
                <p>name : {info.name}</p>
                <Link to={link}> enter </Link>
            </div>
        );
    }
}

export default Course;