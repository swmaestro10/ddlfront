import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../nav/header';
import Introduction from './introduction';
import CourseList from './courseList';

class MainPage extends Component {
    onCheckUser(token) {
        return (
            <div>
                {token
                    ? <CourseList />
                    : <Introduction />
                } 
            </div>
        );
    }
    render() {
        const token = this.props.user.token;
        return(
            <div>
                <Header />
                {this.onCheckUser(token)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainPage);