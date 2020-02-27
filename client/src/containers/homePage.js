import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

    render(){
        return(
            <div>
                <h2>Welcome to TravelPlanner Home Page</h2>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
})

export default connect(mapStateToProps, { })(HomePage);