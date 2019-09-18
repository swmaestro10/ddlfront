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
            <div>
                <BlocklyDrawer
                    className="codeblock"
                    tools={blocks}
                    // workspaceXML={this.props.code.workspace}
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

export default connect(mapStateToProps, { fetchCode })(CodeBlock);
