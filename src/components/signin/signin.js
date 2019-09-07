import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './signinForm';

class SignIn extends Component {
    render(){
        return(
            <div>
                <SignInForm />
                <Link to="/signup">sign up</Link>
                <Link to="/main">back</Link>
            </div>
        );
    }
}

export default SignIn;
