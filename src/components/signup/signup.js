import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signupForm';

class SignUp extends Component {
    render(){
        return(
            <div className="signup">
                <div className="signbox">
                    <h1>Register</h1>
                    <SignUpForm />
                    <Link to="/signin">back</Link>
                </div>
            </div>
        );
    }
}

export default SignUp;