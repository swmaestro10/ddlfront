import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../../actions/fileFunction";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      fileUrl: null
    };
  }
  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
      fileUrl: URL.createObjectURL(e.target.files[0])
    });
  }
  handlePost() {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    this.props.uploadFile(formData);
  }
  render() {
    return (
      <div className="introduct">
        <div className="interestBox">
          <img
            className="interestImg"
            src={this.state.fileUrl}
            alt=""
            accept="image/*"
          />
          <img
            className="interestImg"
            src={`data:image/*;base64,${this.props.file}`}
            alt=""
          />
        </div>
        <div className="pushButton">
          <input
            type="file"
            name="img"
            onChange={e => this.handleFileInput(e)}
          />
          <button type="button" onClick={this.handlePost.bind(this)}>
            upload
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    file: state.file
  };
}

export default connect(
  mapStateToProps,
  { uploadFile }
)(Introduction);
