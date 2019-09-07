import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions/userFunction';

class SignInForm extends Component {
    renderField(field) {
        return(
            <div>
                <input 
                    type={field.label}
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }
    onSubmit(values) {
        this.props.signIn(values, (path) => {
            this.props.history.push(`${path}`);
        });
    }
    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="email"
                    label="email"
                    component={this.renderField}
                />
                <Field
                    name="pw"
                    label="password"
                    component={this.renderField}
                />
                <button type="submit">SIGN IN</button>
            </form>       
        );
    }
}

function validate(values) {
    const errors = {};
    if(!values.email) {
        errors.email="Enter a email!";
    }
    if(!values.pw) {
        errors.pw="Enter a password!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignIn'
})(
    withRouter(connect(null, { signIn })(SignInForm))
);