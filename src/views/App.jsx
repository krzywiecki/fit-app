import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Website } from './Website';
import { Panel } from './Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Redirect exact from='/panel' to='/panel/dashboard'/>
            <Route path="/panel" component={Panel} />
            <Route path="/" component={Website} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
