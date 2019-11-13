import React, { Component } from "react";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { uploadFile } from "../../actions/fileFunction";
import style1 from "../img/style1.jpg";
import style2 from "../img/style2.jpg";
import style3 from "../img/style3.jpg";
import img_tuto from "../img/img_tuto.jpg";
import img_block from "../img/img_block.png";
import img_model from "../img/img_model.png";
import img_web from "../img/img_web.png";

import CanvasDraw from "react-canvas-draw";
import html2canvas from "html2canvas";

class Introduction extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.state = {
      imgStyle: "1",
      selectedFile: null,
      fileUrl: null
    };
    cookies.remove("token");
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
      <div className="intro_h">
        <div className="introduction">
          <div className="welcome">
            <h1>DDUKDDAK-LEARNING</h1>
            <h2>
              딥러닝, 머신러닝을 손쉽게 경험해보세요.
              <br />
              뚝딱러닝이 블록코딩으로 당신을 도와드립니다.
            </h2>
            <p>
              누구나 쉽고 재밌게 소프트웨어를 배울 수 있어요.
              <br />
              지금 바로 시작해보세요!
            </p>
          </div>
          <div className="explain">
            <div className="explainUnit">
              <img src={img_tuto} alt="" width="200" height="200" />
              <h4>머신러닝 기본 개념에 대한 튜토리얼을 제공 합니다.</h4>
            </div>
            <div className="explainUnit">
              <img src={img_block} alt="" width="200" height="200" />
              <h4>블록코딩으로 모델 학습에 대해 이해할 수 있습니다.</h4>
            </div>
            <div className="explainUnit">
              <img src={img_model} alt="" width="200" height="200" />
              <h4>다양한 학습 모델을 체험할 수 있습니다.</h4>
              <h4>학습기회를 제공합니다.</h4>
            </div>
            <div className="explainUnit">
              <img src={img_web} alt="" width="200" height="200" />
              <h4>웹 서비스를 통한 교육으로 부담없이 진행하실 수 있습니다.</h4>
            </div>
          </div>
        </div>
        <div className="introduct">
          <div className="introHead">
            <h1>당신의 사진에 스타일을 입혀보세요!</h1>
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
        <div>
          <CanvasDraw
            className="my-node"
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor="#000"
            brushRadius={8}
            lazyRadius={1}
            canvasWidth={400}
            canvasHeight={400}
          />
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              html2canvas(document.querySelector(".my-node")).then(canvas => {
                document.body.appendChild(canvas);
              });
            }}
          >
            capture
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

export default withCookies(
  connect(mapStateToProps, { uploadFile })(Introduction)
);
