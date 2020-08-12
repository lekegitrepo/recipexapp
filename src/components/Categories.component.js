import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { addRecipes, addCategories } from '../actions/index.actions';

class Categories extends Component {
  
   getCategoriesRecipes = async () => {
    const { addCategories } = this.props
     try {
       const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
       const { ...items } = await res.json();
       const { categories } = items // categories from json object
       addCategories(categories)
       return items;
     } catch (error) {
       throw new Error(error.message);
     }
   };

  componentDidMount = () => {
    this.getCategoriesRecipes()
  };
 
  render() {
    const { categories } = this.props
    return (
      <div className="Categories">
        <div>
          {categories.map(item =>
            <div key={v4()} className="recipe">
              <div className="recipes__card">
                <img className="recipe__card-image" src={item.strCategoryThumb} alt={item.strCategory} />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {item.strCategory}
                  </h5>
                  <p className="recipes__subtitle">
                  Description: 
                    <span>{item.strCategoryDescription}</span>
                  </p>
                </div>
                <button className="btn" type="button">
                  <Link to={{ pathname: `/category/${item.idCategory}`, state: { name: item.strCategory, linkPath: `/category/${item.idCategory}` } }}>View {item.strCategory} Category</Link>
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

