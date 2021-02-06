//* Function to validate the ID
const validateRecipeID = (recipeModel) => (req, res, next) => {
  const { id } = req.params;

  recipeModel.getRecipeByID(id).then((recipe) => {
    if (recipe.length) {
      req.recipe = recipe;
      next();
    } else {
      res.status(404).json({ errMessage: "Recipe Not Found" });
    }
  });
};

//* Function to validate the ID
const validateIngredientID = (ingredientModel) => (req, res, next) => {
  const { id } = req.params;

  ingredientModel.getIngredientByID(id).then((recipe) => {
    if (recipe.length) {
      req.recipe = recipe;
      next();
    } else {
      res.status(404).json({ errMessage: "Ingredient Not Found" });
    }
  });
};

//* Export Modules
module.exports = {
  validateRecipeID,
  validateIngredientID,
};
