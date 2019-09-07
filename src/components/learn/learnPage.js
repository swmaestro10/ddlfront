import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../nav/header';
import Tutorial from './tutorial';
import CodeBox from './codeBox';

class LearnPage extends Component {
    componentDidMount() {
        const token = this.props.user.token;
        if(!token){
            this.props.history.push('/signin');
        }   
    }
    render() {
        const { id } = this.props.match.params;
        return(
            <div>
                <Header />
                <Tutorial index={id} />
                <CodeBox />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LearnPage);