import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { addCategories } from '../actions/index.actions';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.getCategoriesRecipes = this.getCategoriesRecipes.bind(this);
  }

  componentDidMount() {
    this.getCategoriesRecipes();
  }

  async getCategoriesRecipes() {
    const { addCategories } = this.props;
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const { ...items } = await res.json();
      const { categories } = items; // categories from json object
      addCategories(categories);
      return items;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="Categories container">
        <div className="row">
          {categories.map(item => (
            <div key={v4()} className="col-md-4 recipe">
              <Link to={{ pathname: `/category/${item.idCategory}`, state: { name: item.strCategory } }}>
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ categories }) => ({ categories });
const mapDispatchToProps = dispatch => ({
  addCategories: categories => dispatch(addCategories(categories)),
});

Categories.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  addCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
