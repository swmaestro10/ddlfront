import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './signinForm';

class SignIn extends Component {
    render(){
        return(
            <div className="signin">
                <div className="signbox">
                    <h1>Let's learn!</h1>
                    <SignInForm />
                    <div>
                        Not register?
                        <Link to="/signup"> sign up</Link>
                    </div>
                    <Link to="/main">back</Link>
                </div>
            </div>
        );
    }
}

export default SignIn;
