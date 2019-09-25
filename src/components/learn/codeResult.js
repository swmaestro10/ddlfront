import React, { Component } from 'react';
import { connect } from 'react-redux';


class CodeResult extends Component {
    // renderCode() {
    //     let results = this.props.result;
    //     return results.map((result, index) => {
    //         return (
    //             <li key={index} className="code"> {result}</li>
    //         )
    //     });
    // }
    render() {
        return(
            <div className={this.props.index === 2 ? "exist" : "non-exist"}>
                <div className="code-text">
                    <ul>
                        {/* {this.renderCode()} */}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.result
    }
}

export default connect(mapStateToProps)(CodeResult);