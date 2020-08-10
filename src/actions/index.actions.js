const actions = {
  ADD_RECIPES: 'ADD_RECIPES',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

const addRecipes = recipes => (
  {
    type: actions.ADD_RECIPES,
    recipes,
  }
);

const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  categories,
});

const changeFilter = filter => ({
  type: actions.CHANGE_FILTER,
  filter,
});

export { actions, addCategories, changeFilter, addRecipes }
