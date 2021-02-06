//* Import Express and setup Router
const express = require("express");
const router = express.Router();

//* Import Models
const ingredientsModel = require("./ingredients-model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Handle Endpoints

//-- GET
// Get all recipes using a certain ingredient
router.get(
  "/:id/recipes",
  getMiddleware.validateIngredientID(ingredientsModel),
  (req, res) => {
    const { id } = req.params;

    ingredientsModel
      .getAllRecipes(id)
      .then((recipes) => {
        res.status(200).json(recipes);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errMessage: "Couldn't get recipes", error: err });
      });
  }
);

//* Export Module
module.exports = router;
