const actions = {
  ADD_RECIPES: 'ADD_RECIPES',
  ADD_CATEGORY: 'ADD_CATEGORY',
  CHANGE_FILTER: 'CHANGE_FILTER',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
};

const addRecipes = recipe => (
  {
    type: actions.ADD_RECIPES,
    recipe,
  }
);

const addCategory = category => ({
  type: actions.ADD_CATEGORY,
  category,
});

const changeFilter = filter => ({
  type: actions.CHANGE_FILTER,
  filter,
});

const addCategories = categories => ({
  type: actions.ADD_CATEGORIES,
  categories,
});

export { actions, addCategory, changeFilter, addRecipes, addCategories }
