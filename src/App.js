import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharInfo from './componenents/CharInfo';
import Logo from './assets/logo.jpg';
import Image from './componenents/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-4">
            <Image src={Logo} alt="Pathfinder Logo" />
            <h1>Character Sheet</h1>
          </div>
          <CharInfo className="col-xs-8" />
        </div>
        <div className="row">
          <div className="col-xs-7">a</div>
          <div className="col-xs-5">a</div>
        </div>
      </div>
    );
  }
}

export default App;
