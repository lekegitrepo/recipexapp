import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { addCategories } from '../actions/index.actions';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  async getRecipes() {
    const { addCategories, location } = this.props;
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${location.state.name}`);
      const { meals } = await res.json();
      addCategories(meals);
      return meals;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  render() {
    const { categories, location } = this.props;
    const category = location.state.name;
    const path = location.state.linkPath;
    return (
      <section className="recipes">
        <header>
          <h3>
            {location.state.name}
            {' '}
            Category
          </h3>
        </header>
        <div className="container">
          <div className="row">
            {categories.map(res => (
              <div key={v4()} className="col-md-4 recipe">
                <div className="recipe__card">
                  <img className="recipe__card-image" src={res.strMealThumb} alt={res.strMeal} />
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {res.strMeal}
                    </h5>
                    <p className="recipes__subtitle">
                      Content:
                      <span>{res.strMeal}</span>
                    </p>
                  </div>
                  <button className="btn btn-view" type="button">
                    <Link to={{
                      pathname: `/recipe/${res.idMeal}`,
                      state: {
                        recipe: res.strMeal, recipes: categories, category, path,
                      },
                    }}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  addCategories: categories => dispatch(addCategories(categories)),
});

Recipes.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  addCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
