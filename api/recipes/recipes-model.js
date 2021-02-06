//* Import the database
const db = require("../../data/db-config");

//* Function to get ALL recipes
function getRecipes() {
  return db("recipes");
}

//* Function to get a recipe by ID
function getRecipeByID(id) {
  return db("recipes").where({ id });
}

//* Functions to get all ingredients and quantities of a recipe
function getShoppingList(recipe_id) {
  return db("ingredientDetails as d")
    .where({ recipe_id })
    .innerJoin("recipes as r", "r.id", "d.recipe_id")
    .innerJoin("ingredients as i", "i.id", "d.ingredient_id")
    .select({
      recipeId: "r.id",
      recipeName: "r.recipe_name",
      ingredientName: "i.ingredient_name",
      ingredientQuantity: "d.quantity",
    });
}

//* Function to get the steps for the recipe
function getInstructions(recipe_id) {
  return db("preparationSteps as p")
    .where({ recipe_id })
    .innerJoin("recipes as r", "r.id", "p.recipe_id")
    .select({
      id: "p.id",
      stepNum: "p.step_num",
      stepDesc: "p.step_description",
      recipeName: "r.recipe_name",
    })
    .orderBy("p.step_num", "asc");
}

//* Esport Modules
module.exports = {
  getRecipes,
  getRecipeByID,
  getShoppingList,
  getInstructions,
};
