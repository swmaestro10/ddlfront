import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInForm from "./signinForm";

class SignIn extends Component {
  render() {
    return (
      <div className="signin">
        <div className="signbox">
          <h1>시작하기</h1>
          <SignInForm />
          <div>
            새 계정 만들기
            <Link to="/signup"> 회원가입</Link>
          </div>
          <Link to="/main">뒤로가기</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
