import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Logout extends Component{
    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="/login">
                    Logout
                </NavLink>
            </Fragment>
        );
    }
}

export default connect(null, { logout })(Logout);


