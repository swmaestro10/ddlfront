import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetClass } from '../../actions/classFunction';
import { submitCode } from '../../actions/codeFunction';
import socketIOClient from 'socket.io-client';

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { page : 0 };
    }
    componentDidMount() {
        const id = this.props.id;
        const token = this.props.user.token;
        if(token){
            this.props.GetClass(token, id);
        }
    }
    pageUp() {
        this.setState({ page: this.state.page + 1});
    }
    pageDown() {
        this.setState({ page: this.state.page - 1 });
    }
    onSubmitCode() {
        const socket = socketIOClient("52.78.238.217:8800");
        socket.on('submit',{"name":"hello"});
        socket.emit('submit',{"name":"hello"});
        // let code = this.props.code.code;
        // let token = this.props.user.token;
        // let id = this.props.id; 
        // this.props.submitCode(code, token, id);
    }
    render() {
        const ex = this.props.class;
        if(ex === null) {
            return <div>Loading...</div>
        }
        if(ex === 0) {
            return <div>Preparing Class</div>
        }
        const book = JSON.parse(ex.tutorial);
        const length = book.length - 1;
        const index = this.state.page;
        return(
            <div className={this.props.index === 0 ? "tutorial exist" : "non-exist"}>
                <div className="tutorial-title">
                    <h1>{ex.name}</h1>
                </div>
                <div className="tutorial-contents">
                    <h4>Step {index} - {book[index].step}</h4>
					<p>{book[index].explain}</p>
					<p>{book[index].trying}</p>
                </div>
                <div className="tutorial-progress">
                    <div 
                        className={index === 0 ? "tutorial-button hidden" : "tutorial-button"} 
                        onClick={this.pageDown.bind(this)}
                    >
                        <p>previous</p>
                    </div>
                    <div 
                        className={index === length ? "tutorial-button none":"tutorial-button"} 
                        onClick={this.pageUp.bind(this)}
                    >
                        <p>next</p>
                    </div>
                    <div
                        className={index === length ? "tutorial-button":"tutorial-button none"} 
                        onClick={this.onSubmitCode.bind(this)}
                    >
                        <p>submit</p>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        class: state.class,
        code: state.code
    }
}

export default connect(mapStateToProps, { GetClass, submitCode })(Tutorial);