import React, { Component } from 'react';
import Categories from './Categories.component';
import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipes Catalogue</h1>
        </header>
        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default App;
