import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";

import { checkUser } from "../actions/userFunction";
import LearnPage from "./learn/learnPage";
import SignUp from "./signup/signup";
import SignIn from "./signin/signin";
import MainPage from "./main/mainPage";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    const token = cookies.get("token") || 0;
    this.props.checkUser(token);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/learn/:id" component={LearnPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/main" component={MainPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(
  connect(
    null,
    { checkUser }
  )(App)
);
