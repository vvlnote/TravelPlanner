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
import { login, logout } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        msg: null
    }

    componentDidUpdate(prevProps) {
        const { error }  = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ ...this.state, msg: error.msg.msg });
            } else {
                this.setState({...this.state, msg:null});
            }
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.clearErrors();
        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        this.props.login(user);

    }    
    
    render() {
        return(
            <Container className="col-md-6 col-md-offset-3" fluid="sm">
            <h2>Welcome to TravlePlanner Login Page</h2>
            <br/>
            <div>
            {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>): null}   
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
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
                        <Button color='success' style={{ marginTop: '2rem'}}>
                            Login
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

export default connect(mapStateToProps, { login, clearErrors, logout })(LoginPage);;
