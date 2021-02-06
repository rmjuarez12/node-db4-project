exports.seed = function (knex) {
  return knex("preparationSteps").insert([
    {
      recipe_id: 1,
      step_num: 1,
      step_description: "First you need cook the rice and make it brown",
    },
    {
      recipe_id: 1,
      step_num: 2,
      step_description: "Then, you cook the chicken and then cut it to pieces",
    },
    {
      recipe_id: 1,
      step_num: 3,
      step_description: "Finally, merge everything together and cook!",
    },
    {
      recipe_id: 2,
      step_num: 1,
      step_description:
        "Paella is a fun dish. First thing you need to do is get a cup of rice",
    },
    {
      recipe_id: 2,
      step_num: 2,
      step_description: "Then, you cook the rice and some condiments",
    },
    {
      recipe_id: 2,
      step_num: 3,
      step_description: "Finally, enjoy looking at the paella cook!",
    },
  ]);
};
