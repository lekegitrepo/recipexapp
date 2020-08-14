import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import CategoryFilter from '../components/CategoryFilter.component';
import { addCategories, addRecipes, changeFilter } from '../actions/index.actions';
import CATEGORIES from '../store/categories.store'

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.filter !== this.props.filter) {
      const { filter } = this.props;
      this.getRecipesByCategory(filter)
      return true;
    }
    return false;
  }

  async getRecipes() {
    const { addCategories, location, filter, addRecipes, changeFilter } = this.props;
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${location.state.name}`);
      const { meals } = await res.json();
      changeFilter(location.state.name)
      addRecipes(meals)
      return meals;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRecipesByCategory(prop) {
    const { addCategories, location, filter, addRecipes } = this.props;
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${prop}`);
      const { meals } = await res.json();
      addRecipes(meals)
      return meals;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  render() {
    let filterCategory = []
    const { categories, location, filter, changeFilter, recipes } = this.props;
    if (recipes.length) {
      filterCategory = recipes[recipes.length - 1]
      if(recipes.length > 1) recipes.shift()
    }
    const category = filter;
    const path = location.state.linkPath;
    return (
      <section className="recipes">
        <header>
          <h3>
            {category}
            {' '}
            Category
          </h3>
        </header>
        <div className="filter-container">
          <CategoryFilter 
            changeFilter={changeFilter} 
            filter={filter} 
            categories={CATEGORIES}
          />
        </div>
        <div className="container">
          <div className="row">
            {filterCategory.map(res => (
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
                        recipe: res.strMeal, recipes: categories, id: res.idMeal
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

const mapStateToProps = ({ recipes, categories, filter }) => ({
  categories, recipes, filter,
});

const mapDispatchToProps = dispatch => ({
  addCategories: categories => dispatch(addCategories(categories)),
  addRecipes: recipes => dispatch(addRecipes(recipes)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

Recipes.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  addCategories: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
