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

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
          <AppNavbar />
          <br />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
          </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
