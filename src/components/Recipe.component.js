import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Recipe extends Component {
  render() {
    const { location } = this.props;
    const recipe = location.state.recipes.find(item => item.strMeal === location.state.recipe);
    const displayRecipe = recipe ? (
      <section className="single-recipe">
        <header>
          <h3>{recipe.strMeal} Recipe</h3>
        </header>
        <div className="container">
          <div className="recipe">
            <img className="recipe__image" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h3 className="recipe__title">{recipe.strMeal}</h3>
            <h4 className="recipe__details">
            Category:
              <span>{recipe.strCategory}</span>
            </h4>
            {/*<p className="recipe-website">
            YouTube:
              <span><a href={recipe.strYoutube}>{recipe.strMeal}</a></span>
            </p>*/}
            <button className="btn btn-back" type="button">
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      </section>
    ) : <h4>Recipe Not Found</h4>;
    return displayRecipe;
  }
}

Recipe.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ recipes }) => ({
  recipes,
});

export default connect(mapStateToProps)(Recipe);
