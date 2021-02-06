exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name").unique().notNullable();
      tbl.string("recipe_description", 2000);
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name").unique().notNullable();
    })
    .createTable("preparationSteps", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("step_num").unsigned().notNullable();
      tbl.string("step_description", 1000);
    })
    .createTable("ingredientDetails", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.float("quantity").unsigned();
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredientDetails")
    .dropTableIfExists("preparationSteps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
