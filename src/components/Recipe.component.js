import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRecipe } from '../actions/index.actions';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  async getRecipe() {
    const { addRecipe, location } = this.props;
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${location.state.id}`);
      const { meals } = await res.json();
      addRecipe(meals[0]);
      return meals;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  render() {
    const { recipe } = this.props;
    let recipeDetail = recipe[recipe.length - 1];
    if (recipe.length) {
      recipeDetail = recipe[recipe.length - 1];
      if (recipe.length > 1) recipe.shift();
    }
    const displayRecipe = recipeDetail ? (
      <section className="single-recipe">
        <header>
          <h3>
            {recipeDetail.strMeal}
          </h3>
        </header>
        <div className="container">
          <div className="recipe">
            <img className="recipe__image" src={recipeDetail.strMealThumb} alt={recipeDetail.strMeal} />
            <h3 className="recipe__title">{recipe[0].strMeal}</h3>
            <h5 className="recipe__details">
              Category:
              {' '}
              <span>
                {' '}
                {recipeDetail.strCategory}
                {' '}
              </span>
            </h5>
            <h5>
              Country:
              {' '}
              <span>
                {' '}
                {recipeDetail.strArea}
              </span>
            </h5>
            <div>
              <h5>Instructions</h5>
              <p>
                {recipeDetail.strInstructions}
              </p>
              <h6>
                Youtube link:
                <a
                  className="link"
                  href={recipeDetail.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Instructions Video
                </a>
              </h6>
              <h6>
                Tag(s):
                <span>{recipeDetail.strTags}</span>
              </h6>
            </div>
            <button className="btn btn-back" type="button">
              <Link to="/">Back to Home</Link>
            </button>
          </div>
        </div>
      </section>
    ) : <h4>Loading...</h4>;
    return displayRecipe;
  }
}

const mapStateToProps = ({ recipe }) => ({
  recipe,
});

const mapDispatchToProps = dispatch => ({
  addRecipe: recipe => dispatch(addRecipe(recipe)),
});

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  addRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
