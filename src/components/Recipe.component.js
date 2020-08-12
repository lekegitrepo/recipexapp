import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Recipe extends Component {
  render() {
    const { location } = this.props;
    const recipe = location.state.recipes.find(item => item.strMeal === location.state.recipe);
    const displayRecipe = recipe ? (
      <div className="container">
      <h5>Recipes Categories</h5>
        <div className="recipe" style={{ marginTop: '40px' }}>
          <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '350px' }} />
          <h3 className="recipe-title">{recipe.strMeal}</h3>
          <h4 className="recipe-details">
          Category:
            <span>{recipe.strCategory}</span>
          </h4>
          <p className="recipe-website">
          YouTube:
            <span><a href={recipe.strYoutube}>{recipe.strMeal}</a></span>
          </p>
          <button className="btn btn-back" type="button">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
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
