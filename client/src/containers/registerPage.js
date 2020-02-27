import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class RegisterPage extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        msg: null
    }

    componentDidUpdate(prevProps) {
        const { error }  = this.props;
        if (error  != prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ ...this.state, msg: error.msg.msg });
            } else {
                this.setState({...this.state, msg:null});
            }
        }  
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.password]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.clearErrors();
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password
        };

        this.props.register(newUser);
        console.log('onSubmit');
    }

    render() {
        return(
            <Container className="themed-container" fluid="sm">
            <h2>Welcome to TravlePlanner Register Page</h2>
            <br/>
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        className="mb-3"
                        onChange={this.onChange}
                        />
                        <Label for="email">Email</Label>
                        <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Please Enter email address as login name"
                        className="mb-3"
                        onChange={this.onChange}
                        />
                        <Label for="password">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        className="mb-3"
                        onChange={this.onChange}
                        /> 
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>): null}   
                        <Button color='success' style={{ marginTop: '2rem'}}>
                            Register
                        </Button>
                                         
                    </FormGroup>
                </Form>
            </div>
            </Container>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(RegisterPage);