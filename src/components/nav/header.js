import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, userInfo } from '../../actions/userFunction';

class Header extends Component {
    onClickSignOut() {
        this.props.signOut();
    }
    onCheckUser(token) {
        return (
            <div>
            {
                token
                ? <Link to="/main" onClick={this.onClickSignOut.bind(this)}> SIGN OUT </Link>
                : <Link to="/signin"> SIGN IN </Link>
            } 
            </div>
        );
    }
    render() {
        const token = this.props.user.token;
        if(token){
             this.props.userInfo(token);
        }
        return(
            <div>
                {this.onCheckUser(token)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps, { signOut, userInfo })(Header);