import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  localStorage.clear();
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link><br />
        <Link to="/protected">Protected Page</Link>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
