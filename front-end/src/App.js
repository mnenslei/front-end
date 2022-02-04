import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import Recipes from './components/Recipes';
import Home from './components/Home';
import Recipe from './components/Recipe';

import './App.css';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/'>Home</Link>
        <Header />
        <Link to='/add/recipes'>Add Recipe</Link>
      </header>
      <Home />
        <Switch>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
          <Route exact path='/recipes'>
            <Recipes />
          </Route>
          <Route exact path='/add/recipes'>
            <AddRecipeForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
