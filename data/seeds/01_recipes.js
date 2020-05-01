exports.seed = async function(knex) {
  await knex("recipes").insert([
    { recipe: "Pancakes" },
    { recipe: "Cloud Bread" },
    { recipe: "Flourless Chocolate & Blueberry Banana Muffins"},
  ])
};
