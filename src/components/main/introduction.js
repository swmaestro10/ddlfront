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
      <div>
        <div className="introduction">
          <div className="welcome">
            <h1>DDUKDDAK-LEARNING</h1>
            <h2>
              Learn new technologies using real enviornments!
              <br />
              right in your browser
            </h2>
            <p>
              Interactive Learning and Training Platform for Software Engineers
              <br />
              Helping Developers Learn and Companies Increase Adoption
            </p>
          </div>
          <div className="explain">
            <div className="explainUnit">
              <h3>
                Learn & Discover the latest
                <br />
                technologies and tooling
              </h3>
              <p>
                Empowering developers to learn the technologies such as
                Kubernetes, Machine Learning and cloud platforms using
                self-paced labs
              </p>
            </div>
            <div className="explainUnit">
              <h3>
                Enable Users to Test Drive Your
                <br />
                Products Within Seconds
              </h3>
              <p>
                Create consistent branded experiences to showcase your product
                directly from the browser without any downloads or configuration
              </p>
            </div>
            <div className="explainUnit">
              <h3>
                Streamline Training and
                <br />
                Workshop Delivery
              </h3>
              <p>
                Encourage users to gain a deeper understanding with on-demand
                and instructor-led training delivered via Katacoda
              </p>
            </div>
            <div className="explainUnit">
              <h3>
                Self-Paced Interactive Learning
                <br />
                For Your Teams
              </h3>
              <p>
                Share knowledge with customised content and labs to demonstrate
                internal tooling, patterns and practices
              </p>
            </div>
          </div>
        </div>
        <div className="introduct">
          <div className="introHead">
            <h1>Style Transform</h1>
          </div>
          <div className="interestBox">
            <img className="interestImg" src={this.state.fileUrl} alt="" />
            <img
              className="interestImg"
              src={`data:image/*;base64,${this.props.file}`}
              alt=""
            />
          </div>
          <div className="filebox">
            <label for="ex_file">파일 업로드</label>
            <input
              id="ex_file"
              type="file"
              name="img"
              accept="image/*"
              onChange={e => this.handleFileInput(e)}
            />
            <button type="button" onClick={this.handlePost.bind(this)}>
              스타일 변환
            </button>
          </div>
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
