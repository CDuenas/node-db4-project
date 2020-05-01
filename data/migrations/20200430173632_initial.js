
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipe").notNull().unique()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient").notNull().unique()
    })

    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.text("step").notNull()
        table.integer("step_number").notNull()
        table.integer("recipe_id").references("id").inTable("recipes").onDelete("SET NULL")
    })

    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipe_id").references("id").inTable("recipes")
        table.integer("ingredient_id").references("id").inTable("ingredients")
        table.float("measurement")
        table.primary(["recipe_id", "ingredient_id"])
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
}
