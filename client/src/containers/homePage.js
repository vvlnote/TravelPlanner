import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
    state = {
        isAuthenticated: false,
        user: null
    }

    componentDidMount() {
        this.setState({
            isAuthenticated: this.props.auth.isAuthenticated,
            user: this.props.auth.user
        })
        console.log(this.props.user);
    }

    render(){
        return (
            <div>
                <h1>Welcome </h1>
            </div>
        )
        // if (this.state.isAuthenticated && this.state.user){
        //     return (
        //         <div>
        //         <h2>Welcome {this.state.user.name} to TravelPlanner Home Page</h2>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <Redirect to="/login" />
        //     );
        // }

        return(
            <div>Welcome to Home Page</div>
        )

    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.auth.user
})

export default connect(mapStateToProps, { })(HomePage);