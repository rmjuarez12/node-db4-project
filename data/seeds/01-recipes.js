exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      recipe_name: "Arroz con pollo",
      recipe_description: "This is a super delicious hispanic dish",
    },
    {
      recipe_name: "Paella",
      recipe_description: "You will LOVE this Spanish dish!",
    },
  ]);
};
