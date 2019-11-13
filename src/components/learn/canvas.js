import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import html2canvas from "html2canvas";

class Canvas extends Component {
  render() {
    return (
      <div className={this.props.index === 3 ? "exist" : "non-exist"}>
        <div className="ccccc">
          <CanvasDraw
            id="mynode"
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor="#000"
            brushRadius={8}
            lazyRadius={1}
            canvasWidth={500}
            canvasHeight={500}
          />
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
                html2canvas(document.querySelector(".ccccc")).then(canvas => {
                  document.body.appendChild(canvas);
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

export default Canvas;
