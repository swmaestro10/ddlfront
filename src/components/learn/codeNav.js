import React, { Component } from 'react';

class CodeNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutor: 0,
            termi: 1,
            resul: 2
        }
        this.navColor = this.navColor.bind(this);
    }
    navColor(){
        let color = this.props.index;
        if(color === 0) {
            return "navunit nav_a";
        }
        if(color === 1) {
            return "navunit nav_b";
        }
        if(color === 2) {
            return "navunit nav_c";
        }
    }
    render() {
        const ex = this.props;
        return(
            <div className={this.navColor()}>
                <div 
                    className={ex.index === 0 ? "navunit unit_a" : "navunit"} 
                    onClick={() => ex.onChangeIndex(this.state.tutor)}
                >
                    <p>Tutorial</p>
                </div>
                <div 
                    className={ex.index === 1? "navunit unit_b" : "navunit"}
                    onClick={() => ex.onChangeIndex(this.state.termi)}
                >
                    <p>Terminal</p>
                </div>
                <div 
                    className={ex.index === 2? "navunit unit_c" : "navunit"}
                    onClick={() => ex.onChangeIndex(this.state.resul)}
                >
                    <p>Result</p>
                </div>
            </div>
        );
    }
}

export default CodeNav;
