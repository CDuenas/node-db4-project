const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("r.id", recipe_id)
        .select("i.ingredient", "ri.measurement")
}

function getInstructions(recipe_id)
    return db("steps as s")
        .join("recipes as r", "r.id", "s.recipe_id")
        .where("r.id", recipe_id)
        .select("r.recipe", "s.step_number", "s.step")
        .orderBy



module.exports = {

}