import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  Map  from '../components/map/map';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Alert
} from 'reactstrap';

class TestPage extends Component {
    state = {
        lat: 0,
        lng: 0
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <h1>Welcome to Map Test page</h1>
                <Map lat={Number(this.state.lat)} lng={ Number(this.state.lng) }/>
                <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                    <label>Latitude: </label>
                    <Input type='text' 
                           name='lat'
                           onChange={this.onChange} 
                    />
                    <Label>Longitude</Label>
                    <Input type='text'
                           name='lng'
                           onChange={this.onChange}
                    />
                    <Button color='primary' style={{ marginTop: '2rem'}}>
                        Mark
                    </Button> 
                    </FormGroup>
                </Form>
                </Container>
            </div>
        );
    }
}

export default TestPage;