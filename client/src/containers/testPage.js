import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  Map  from '../components/map/map';

class TestPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Map Test page</h1>
                <Map />
            </div>
        );
    }
}

export default TestPage;