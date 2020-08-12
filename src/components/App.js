import React from 'react';
import Categories from './Categories.component';
import '../style/main.css';

const App = () => (
  <div className="App">
    <header>
      <h1>Recipes Catalogue</h1>
    </header>
    <div>
      <Categories />
    </div>
  </div>
);

export default App;
