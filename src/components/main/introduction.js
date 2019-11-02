import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../../actions/fileFunction";
import style1 from "../img/style1.jpg";
import style2 from "../img/style2.jpg";
import style3 from "../img/style3.jpg";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgStyle: "1",
      selectedFile: null,
      fileUrl: null
    };
  }
  handleFileInput(e) {
    this.setState({
      ...this.state,
      selectedFile: e.target.files[0],
      fileUrl: URL.createObjectURL(e.target.files[0])
    });
  }
  handlePost() {
    if (this.state.selectedFile !== null) {
      const formData = new FormData();
      formData.append("file", this.state.selectedFile);
      formData.append("style", this.state.imgStyle);
      this.props.uploadFile(formData);
    } else {
      alert("사진을 넣어주세요");
    }
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
            <div className="styleBox">
              <div
                onClick={() => {
                  this.setState({
                    ...this.state,
                    imgStyle: "1"
                  });
                }}
              >
                <img src={style1} alt="style1" className="imgStyle" />
              </div>
              <div
                onClick={() => {
                  this.setState({
                    ...this.state,
                    imgStyle: "2"
                  });
                }}
              >
                <img src={style2} alt="style2" className="imgStyle" />
              </div>
              <div
                onClick={() => {
                  this.setState({
                    ...this.state,
                    imgStyle: "3"
                  });
                }}
              >
                <img src={style3} alt="style3" className="imgStyle" />
              </div>
            </div>
            <img
              className="interestImg"
              src={`data:image/*;base64,${this.props.file}`}
              alt=""
            />
          </div>
          <div className="filebox">
            <label htmlFor="ex_file">사진 불러오기</label>
            <input
              id="ex_file"
              type="file"
              name="img"
              accept="image/*"
              onChange={e => this.handleFileInput(e)}
            />
            <div className="IMstyle">화풍 {this.state.imgStyle}번</div>
            <button type="button" onClick={this.handlePost.bind(this)}>
              스타일 변환하기
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
