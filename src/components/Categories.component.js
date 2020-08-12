import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes.component';
import { addRecipes, addCategory, changeFilter, addCategories } from '../actions/index.actions';

class Categories extends Component {
  
   getCategoriesRecipes = async () => {
    const { addCategory, addRecipes, addCategories } = this.props
     try {
       const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
       const { ...items } = await res.json();
       const { categories } = items // categories from json object
       addCategories(categories)
       addRecipes('Beef Meat')
       return items;
     } catch (error) {
       throw new Error(error.message);
     }
   };

  componentDidMount = () => {
    this.getCategoriesRecipes()
  };
 
  render() {
    const { categories, recipes } = this.props
    return (
      <div className="Categories">
        <div>
          {categories.map(item =>
            <div key={item.idCategory} className="col-md-4 recipe" style={{ marginBottom: '2rem' }}>
              <div className="recipes__box">
                <img className="recipe__box-img" src={item.strCategoryThumb} alt={item.strCategory} />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {item.strCategory}
                  </h5>
                  <p className="recipes__subtitle">
                  Description: 
                    <span>{item.strCategoryDescription}</span>
                  </p>
                </div>
                <button className="recipe_buttons" type="button">
                  <Link to={{ pathname: `/category/${item.idCategory}`, state: { name: item.strCategory } }}>View Recipe</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ recipes, categories}) => ({
  recipes, categories,
});
const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch(addRecipes(recipes)),
  addCategories: categories => dispatch(addCategories(categories)),
});

Categories.propTypes = {
  recipes: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

