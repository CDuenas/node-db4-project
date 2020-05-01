exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { ingredient: "Whole Banana" },
    { ingredient: "Whole Egg" },
    { ingredient: "Teaspoon of Cinnamon" },
    { ingredient: "Teaspoon of Cream of Tartar" },
    { ingredient: "Tablespoon of cream cheese" },
    { ingredient: "Cup of Almond Butter" },
    { ingredient: "Cup of Cocoa Powder" },
    { ingredient: "Cup of Blueberries" },
  ])
};
