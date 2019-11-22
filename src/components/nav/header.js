import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut, userInfo } from "../../actions/userFunction";

class Header extends Component {
  onClickSignOut() {
    this.props.signOut();
  }
  onCheckUser(token) {
    return (
      <div className="navigation">
        {token ? (
          <div>
            <Link className="atag" to="/main">
              {" "}
              학습공간{" "}
            </Link>
            <Link
              className="atag"
              to="/main"
              onClick={this.onClickSignOut.bind(this)}
            >
              {" "}
              나가기{" "}
            </Link>
          </div>
        ) : (
          <Link className="atag" to="/signin">
            {" "}
            시작하기{" "}
          </Link>
        )}
      </div>
    );
  }
  render() {
    const token = this.props.user.token;
    if (token) {
      this.props.userInfo(token);
    }
    return (
      <div className="header">
        <div className="logo">
          <h1>
            <Link className="atag" to="/main">
              뚝딱러닝
            </Link>
          </h1>
        </div>
        {this.onCheckUser(token)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { signOut, userInfo })(Header);
