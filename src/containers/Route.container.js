import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index.store';
import App from './App.container';
import Recipes from '../components/Recipes.component';
import Recipe from '../components/Recipe.component';

const PageRoute = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/category/:id" component={Recipes} />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </Router>
  </Provider>

);

export default PageRoute;
