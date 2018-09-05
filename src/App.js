import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import LandingContainer from './landingPage/LandingContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
