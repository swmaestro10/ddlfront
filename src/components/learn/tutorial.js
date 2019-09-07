import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetClass } from '../../actions/classFunction';

class Tutorial extends Component {
    componentDidMount() {
        const { index }= this.props;
        const token = this.props.user.token;
        if(token){
            this.props.GetClass(token, index);
        }
    }
    render() {
        const ex = this.props.class;
        if(ex === null) {
            return <div>Loading...</div>
        }
        if(ex === 0) {
            return <div>Preparing Class</div>
        }
        return(
            <div>
                <h3>
                    {this.props.class.name}
                </h3>
                <p>
                    {this.props.class.tutorial}
                </p>
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