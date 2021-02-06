//* Import express and setup router
const express = require("express");
const router = express.Router();

//* Import Models
const recipeModel = require("./recipes-model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Handle Endpoints CRUD

//-- GET
// Get all recipes
router.get("/", (req, res) => {
  recipeModel
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ errMessage: "Error getting Recipes", error: err });
    });
});

// Get a recipe by ID
router.get("/:id", getMiddleware.validateRecipeID(recipeModel), (req, res) => {
  const { recipe } = req;

  res.status(200).json(recipe);
});

// Get all ingredients info from a recipe
router.get(
  "/:id/shoppingList",
  getMiddleware.validateRecipeID(recipeModel),
  (req, res) => {
    const { id } = req.params;

    recipeModel
      .getShoppingList(id)
      .then((ingredients) => {
        res.status(200).json(ingredients);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errMessage: "Error getting Ingredients Info", error: err });
      });
  }
);

// Get all the steps of a recipe
router.get(
  "/:id/instructions",
  getMiddleware.validateRecipeID(recipeModel),
  (req, res) => {
    const { id } = req.params;

    recipeModel
      .getInstructions(id)
      .then((steps) => {
        res.status(200).json(steps);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errMessage: "Error getting Instructions Info", error: err });
      });
  }
);

//* Export Router
module.exports = router;
