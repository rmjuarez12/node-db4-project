//* Import DB
const db = require("../../data/db-config");

//* Function to get all recipes using a certain ingredient
function getAllRecipes(ingredient_id) {
  return db("ingredientDetails as d")
    .where({ ingredient_id })
    .innerJoin("ingredients as i", "i.id", "d.ingredient_id")
    .innerJoin("recipes as r", "r.id", "d.recipe_id")
    .select({
      id: "i.id",
      ingredientName: "i.ingredient_name",
      recipeId: "r.id",
      recipeName: "r.recipe_name",
    });
}

//* Function to get a specific ingredient
function getIngredientByID(id) {
  return db("ingredients as i").where({ id });
}

//* Export Modules
module.exports = {
  getAllRecipes,
  getIngredientByID,
};
