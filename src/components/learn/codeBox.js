import React, { Component } from 'react';

import CodeNav from './codeNav';
import Tutorial from './tutorial';
import CodeText from './codeText';
import CodeResult from './codeResult'

class CodeBox extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }
    onChangeIndex(next) {
        this.setState({ 
            ...this.state,
            index: next 
        });
    }
    render() {
        return(
            <div className="codebox">
                <CodeNav 
                    index={this.state.index}
                    onChangeIndex={(next) => this.onChangeIndex(next)}
                />
                <Tutorial index={this.state.index} />
                <CodeText index={this.state.index} />
                <CodeResult index={this.state.index} />
            </div>
        );
    }
}

export default CodeBox;