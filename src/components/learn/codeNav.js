import React, { Component } from 'react';

class CodeNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutor: 0,
            termi: 1,
            resul: 2
        }
    }
    render() {
        const ex = this.props;
        return(
            <div className="codenav">
                <div 
                    className={ex.index === 0 ? "navunit" : "navunit navspan"} 
                    onClick={() => ex.onChangeIndex(this.state.tutor)}
                >
                    <p>Block</p>
                </div>
                <div 
                    className={ex.index === 1? "navunit" : "navunit navspan"}
                    onClick={() => ex.onChangeIndex(this.state.termi)}
                >
                    <p>Terminal</p>
                </div>
                <div 
                    className={ex.index === 2? "navunit" : "navunit navspan"}
                    onClick={() => ex.onChangeIndex(this.state.resul)}
                >
                    <p>Result</p>
                </div>
            </div>
        );
    }
}

export default CodeNav;