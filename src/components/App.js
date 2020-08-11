import React from 'react';
import '../style/App.css';

function App() {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div className="App">
      <h1>Recipes App</h1>
      <ul>
        {}
      </ul>
    </div>
  );
}

export default App;
