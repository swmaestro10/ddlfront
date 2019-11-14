import React, { Component } from "react";
import loading from "../img/loading.gif";

class Load extends Component {
  render() {
    return (
      <div className="load">
        <div className="loadin">
          <img src={loading} alt="loading" />
        </div>
      </div>
    );
  }
}

export default Load;
