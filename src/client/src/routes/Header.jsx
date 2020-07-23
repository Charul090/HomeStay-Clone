import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;