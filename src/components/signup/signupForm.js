import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/userFunction';

class SignUpForm extends Component {
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
        this.props.signUp(values, (path) => {
           this.props.history.push(`${path}`); 
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="name"
                    label="text"
                    component={this.renderField}
                />
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
                <button type="submit">SIGN UP</button>
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
    if(!values.name) {
        errors.name="Enter a nickname";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignUp'
})(
    withRouter(connect(null,{ signUp })(SignUpForm))
);