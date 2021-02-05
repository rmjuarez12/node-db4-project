exports.seed = function (knex) {
  return knex("ingredientDetails").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 3 },
    { recipe_id: 1, ingredient_id: 3, quantity: 1 },
    { recipe_id: 2, ingredient_id: 4, quantity: 5 },
    { recipe_id: 2, ingredient_id: 5, quantity: 2 },
    { recipe_id: 2, ingredient_id: 6, quantity: 100 },
  ]);
};
