import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { addCategories } from '../actions/index.actions';

class Recipes extends Component {

  getRecipes = async () => {
    const { addCategories, location } = this.props
     try {
       console.log('category name ', location.state.name)
       const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${location.state.name}`);
       const { meals } = await res.json();
       addCategories(meals)
       console.log(meals[0])
       return meals;
     } catch (error) {
       throw new Error(error.message);
     }
  };

  componentDidMount = () => {
    this.getRecipes()
  };
  
  render() {
    const { categories, location } = this.props
    return (
      <div className="container">
        <header>
          <h3>{location.state.name} Category</h3>
        </header>
        <div className="row">
          {categories.map(res => 
          { 
            return (
              <div key={v4()} className="col-md-4 recipe">
                <div className="recipe__card">
                  <img className="recipe__card-image" src={res.strMealThumb} alt={res.strMeal} />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {res.strMeal}
                    </h5>
                    <p className="recipes__subtitle">
                    Content: 
                      <span>{res.strMeal }</span>
                    </p>
                  </div>
                  <button className="btn btn-view" type="button">
                    <Link to={{ pathname: `/recipe/${res.idMeal}`, state: { recipe: res.strMeal, recipes: categories } }}>View Recipe</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  addCategories: categories => dispatch(addCategories(categories)),
});

Recipes.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
