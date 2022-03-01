//creating routes

const { Router } = require('express');
// const { route } = require('express/lib/application');
const controllers = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send("This is the recipe route!"));

router.post('/recipes', controllers.createRecipe);

router.get('/recipes', controllers.getAllRecipes);

router.get('/recipes/:id', controllers.getRecipeById);

router.put('/recipes/:id', controllers.updateRecipe);

router.delete('/recipes/:id', controllers.deleteRecipe);

module.exports = router;