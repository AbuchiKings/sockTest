import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/Join';
import Transaction from './components/Transaction';
import Sender from './components/Sender';
import './App.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Join} />
        <Route path='/transaction' component={Transaction} />
        <Route path='/sender' component={Sender} />
      </Switch>
    </Router>
  );
}

export default App;
