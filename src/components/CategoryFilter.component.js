import React from 'react';
import Proptypes from 'prop-types';


const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleChange} value={filter}>
        <option value="All Categories">All Categories</option>
        {categories.map(({ category }) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: Proptypes.instanceOf(Array).isRequired,
  changeFilter: Proptypes.func.isRequired,
  filter: Proptypes.string.isRequired,
};

export default CategoryFilter;
