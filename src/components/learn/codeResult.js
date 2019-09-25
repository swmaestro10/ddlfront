import React, { Component } from 'react';
import { connect } from 'react-redux';


class CodeResult extends Component {
    render() {
        return(
            <div className={this.props.index === 2 ? "exist" : "non-exist"}>
                <div className="coderesult">
                    {console.log(this.props.result)}
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