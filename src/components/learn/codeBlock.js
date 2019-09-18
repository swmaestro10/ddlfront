import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';

import { fetchCode } from '../../actions/codeFunction';
import { blocks } from '../blocks/blocks';

class CodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workspace: ''
        };
    }
    onChangeState(code, workspace) {
        this.props.fetchCode(code, workspace);
    }
    render() {
        return(
            <div className="codeblocks">
                <BlocklyDrawer
                    className="codeblock"
                    tools={blocks}
                    workspaceXML={this.state.workspace}
                    onChange={(code,workspace) => {
                            this.onChangeState(code,workspace);
                    }}
                    appearance = {{
                        categories : {
                            Model : {colour : '50'},
                            Data : { colour : '200' },
                            modelLayer : { colour : '150' },
                            Training : { colour : '100' },
                            Demo : { colour : '270' },
                            test : { colour : '160' },
                        },                    
                    }}      
                >
                    <Category name="Variables" custom="VARIABLE" />
                    <Category name="Values" >
                        <Block type="math_number" />
                        <Block type="text" />
                    </Category>                      
                </BlocklyDrawer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        code: state.code
    }
}

export default connect(null, { fetchCode })(CodeBlock);
