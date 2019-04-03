import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import BillPayment from './components/BillPayment';
import {Switch , Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import CreateHousehold from './components/CreateHousehold';
import ListHousehold from './components/ListHousehold';
import Check from './components/Check.js';
import Invite from './components/Invite.js';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/billpayment' component={BillPayment} />
          <Route exact path='/createhousehold' component={CreateHousehold} />
          <Route exact path='/listofhouseholds' component={ListHousehold} />
          <Route exact path='/check' component={Check} />
          <Route exact path='/invite/:household' component={Invite} />
          <Route exact path='/message' component={Message} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
