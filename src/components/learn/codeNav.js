import React, { Component } from 'react';

class CodeNav extends Component {
    render() {
        return(
            <div className="codenav">
                <div className="navunit">
                    <p>Block</p>
                </div>
                <div className="navunit">
                    <p>Terminal</p>
                </div>
                <div className="navunit">
                    <p>Result</p>
                </div>
            </div>
        );
    }
}

export default CodeNav;