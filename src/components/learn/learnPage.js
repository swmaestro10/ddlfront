import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../nav/header';
import CodeBox from './codeBox';
import CodeBlock from './codeBlock';

class LearnPage extends Component {
    componentDidMount() {
        const token = this.props.user.token;
        if(!token){
            this.props.history.push('/signin');
        }   
    }
    render() {
        return(
            <div>
                <Header />
                <div className="learnpage">
                    <CodeBox />
                    <CodeBlock />
                </div>
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