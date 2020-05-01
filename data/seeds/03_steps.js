exports.seed = async function(knex) {
  await knex("steps").insert([
    { step:"mash the banana with a fork", step_number: 1, recipe_id: 1 },
    { step:"Add eggs and cinnamon. Mix until combined.", step_number: 2, recipe_id: 1 },
    { step:"Heat a nonstick skillet over medium heat. Add a spoonful of batter and cook for 3-4 minutes, then flip and cook for an additional 3-4 minutes.", step_number: 3, recipe_id: 1 },
    { step:"Serve with maple syrup or honey.", step_number: 4, recipe_id: 1 },
    { step:"Separate the eggs into two bowls.", step_number: 1, recipe_id: 2 },
    { step:"Add the cream of tartar to the egg whites and whip into stiff peaks.", step_number: 2, recipe_id: 2 },
    { step:"Add the cream cheese or yogurt into the yolks and mix until combined.", step_number: 3, recipe_id: 2 },
    { step:"Fold half of the egg whites into the yolks until just combined. Add the rest and fold again until incorporated.", step_number: 4, recipe_id: 2 },
    { step:"Line a baking sheet with parchment paper and place six dollops of the mixture on the tray.", step_number: 5, recipe_id: 2 },
    { step:"Spread out the circles with a spatula to about ½ inch (1 cm) thick.", step_number: 6, recipe_id: 2 },
    { step:"Bake for 30 minutes or until golden.", step_number: 7, recipe_id: 2 },
    { step:"Allow to cool for at least 1 hour.", step_number: 8, recipe_id: 2 },
    { step:"Preheat oven to 350°F (180°C).", step_number: 1, recipe_id: 3 },
    { step:"In a bowl, mash the bananas with a fork.", step_number: 2, recipe_id: 3 },
    { step:"Add nut butter and mix until combined.", step_number: 3, recipe_id: 3 },
    { step:"Divide the batter into two bowls.", step_number: 4, recipe_id: 3 },
    { step:"Add cocoa powder to one bowl of batter and mix well.", step_number: 5, recipe_id: 3 },
    { step:"Add the blueberries to the other bowl of batter and mix well.", step_number: 6, recipe_id: 3 },
    { step:"Add the batter to a muffin tin.", step_number: 7, recipe_id: 3 },
    { step:"Bake for 18-20 minutes.", step_number: 8, recipe_id: 3 },
  ])
};
