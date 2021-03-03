import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess'


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/strictaccess">Strict Access</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users/:id"
            render={ props => <Users { ...props } greetingMessage={ "Good Morning" } /> } />
          <Route path="/StrictAccess"
            render={ () => (<StrictAccess
              user={ { username: 'joao', password: '1234' } } />) } />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter >
    );
  }
}

export default App;
