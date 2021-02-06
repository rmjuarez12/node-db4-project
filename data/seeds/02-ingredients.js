exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Full chicken" },
    { ingredient_name: "Cup of rice" },
    { ingredient_name: "Gram(s) of butter" },
    { ingredient_name: "Tbs of salt" },
    { ingredient_name: "Lbs of shrimp" },
    { ingredient_name: "Cup of love" },
  ]);
};
