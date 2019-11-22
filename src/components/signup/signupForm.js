import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/userFunction";

class SignUpForm extends Component {
  renderField(field) {
    return (
      <div>
        <input
          className="blank"
          type={field.label}
          {...field.input}
          placeholder={field.meta.error}
        />
      </div>
    );
  }
  onSubmit(values) {
    this.props.signUp(values, path => {
      this.props.history.push(`${path}`);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="name" label="text" component={this.renderField} />
        <Field name="email" label="email" component={this.renderField} />
        <Field name="pw" label="password" component={this.renderField} />
        <button className="blank" type="submit">
          가입
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "이메일을 입력하세요!";
  }
  if (!values.pw) {
    errors.pw = "비밀번호를 입력하세요!";
  }
  if (!values.name) {
    errors.name = "이름을 입력하세요!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "SignUp"
})(withRouter(connect(null, { signUp })(SignUpForm)));
