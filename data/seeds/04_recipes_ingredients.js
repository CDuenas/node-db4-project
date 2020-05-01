exports.seed = async function(knex) {
  await knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, measurement: 1 },
    { recipe_id: 1, ingredient_id: 2, measurement: 2 },
    { recipe_id: 1, ingredient_id: 3, measurement: 0.25 },
    { recipe_id: 2, ingredient_id: 2, measurement: 3 },
    { recipe_id: 2, ingredient_id: 4, measurement: 0.125 },
    { recipe_id: 2, ingredient_id: 5, measurement: 3 },
    { recipe_id: 3, ingredient_id: 1, measurement: 9 },
    { recipe_id: 3, ingredient_id: 6, measurement: 1.5 },
    { recipe_id: 3, ingredient_id: 7, measurement: 0.5 },
    { recipe_id: 3, ingredient_id: 8, measurement: 1.5 },
  ])
};
