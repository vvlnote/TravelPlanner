import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import AppNavbar from './components/AppNavbar';
import LoginPage from './containers/loginPage';
import RegisterPage from './containers/registerPage';
import HomePage from './containers/homePage';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>

      <div className="App">
          <AppNavbar />
          <br />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path="/home" component={HomePage} />
          </Switch>
      </div>

      </Provider>
    );
  }
}

export default App;
