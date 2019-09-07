import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './signupForm';

class SignUp extends Component {
    render(){
        return(
            <div>
                <SignUpForm />
                <Link to="/signin">back</Link>
            </div>
        );
    }
}

export default SignUp;