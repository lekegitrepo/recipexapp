import React from 'react';
import Proptypes from 'prop-types';
import { v4 } from 'uuid';

const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleChange} value={filter}>
        {categories.map(category => (
          <option key={v4()} value={category}>
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
