import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetClass } from '../../actions/classFunction';

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { page : 0 };
    }
    componentDidMount() {
        const { index }= this.props;
        const token = this.props.user.token;
        if(token){
            this.props.GetClass(token, index);
        }
    }
    pageUp() {
        this.setState({ page: this.state.page + 1})
    }
    pageDown() {
        this.setState({ page: this.state.page - 1 })
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
            <div className="tutorial">
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
                        className={index === 0 ? "tutorial-button none" : "tutorial-button"} 
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
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        class: state.class
    }
}

export default connect(mapStateToProps, { GetClass })(Tutorial);