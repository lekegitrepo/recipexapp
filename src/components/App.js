import React, { Component } from 'react';
import Categories from './Categories.component';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Recipes App</h1>
        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default App;
