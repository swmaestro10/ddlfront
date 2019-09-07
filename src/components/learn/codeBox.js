import React, { Component } from 'react';

import CodeNav from './codeNav';
import CodeBlock from './codeBlock';
import CodeText from './codeText';
import CodeResult from './codeResult'

class CodeBox extends Component {
    render() {
        return(
            <div>
                <CodeNav />
                <CodeBlock />
                <CodeText />
                <CodeResult />
            </div>
        );
    }
}

export default CodeBox;