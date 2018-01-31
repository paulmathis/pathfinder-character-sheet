import React, { Component } from 'react';
import './App.css';
import SheetTop from './containers/SheetTop';
import SheetLeft from './containers/SheetLeft';
import SheetRight from './containers/SheetRight';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SheetTop />
        <div className="row">
          <div className="col-xs-55">
            <SheetLeft />
          </div>
          <div className="col-xs-45">
            <SheetRight />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
