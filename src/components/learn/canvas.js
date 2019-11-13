import React, { Component } from "react";
import { connect } from "react-redux";
import CanvasDraw from "react-canvas-draw";
import html2canvas from "html2canvas";

import { testFile } from "../../actions/fileFunction";

class Canvas extends Component {
  render() {
    return (
      <div className={this.props.index === 3 ? "exist" : "non-exist"}>
        <div className="ccccc">
          <div className="ddddd">
            <CanvasDraw
              id="mynode"
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor="#000"
              brushRadius={8}
              lazyRadius={1}
              hideGrid="false"
              canvasWidth={500}
              canvasHeight={500}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.saveableCanvas.clear();
              }}
            >
              지우기
            </button>
            <button
              onClick={() => {
                html2canvas(document.querySelector(".ddddd")).then(canvas => {
                  let imgDataUrl = canvas.toDataURL("image/png");

                  let blobBin = atob(imgDataUrl.split(",")[1]);
                  let array = [];
                  for (let i = 0; i < blobBin.length; i++) {
                    array.push(blobBin.charCodeAt(i));
                  }
                  var file = new Blob([new Uint8Array(array)], {
                    type: "image/png"
                  });
                  var formdata = new FormData(); // formData 생성
                  formdata.append("file", file); // file data 추가
                  this.props.testFile(formdata);
                });
              }}
            >
              테스트해보기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { testFile })(Canvas);
