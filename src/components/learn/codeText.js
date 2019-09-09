import React, { Component } from 'react';
import { connect } from 'react-redux';

class CodeText extends Component {
    renderCode() {
        let count = 0;    
        const codeString = `${this.props.code[0]}`;
        const codeSplited = codeString.split(';');
        return codeSplited.map((code) => {
            if(code !== ""){
                count = count + 1;
                return (<li key={count} className="code"> >>> {code} </li>)
            }
            return "";
        });
    }
    render() {
        return(
            <div className={this.props.index === 1 ? "exist" : "non-exist"}>
                <div className="code-text">
                    <ul>
                        {this.renderCode()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        code: state.code
    }
}

export default connect(mapStateToProps)(CodeText);