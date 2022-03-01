const res = require('express/lib/response');
const Recipe = require('../models/recipe');

async function getAllRecipes(req, res) {
    try {
      const recipes = await Recipe.find({})
      return res.status(200).json({recipes})
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async function createRecipe(req, res) {
    try {
      const recipe = await new Recipe(req.body)
      await recipe.save()
      return res.status(201).json({
        recipe,
      })
  
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  async function getRecipeById(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id)
      if (recipe) {
        return res.status(200).json({recipe})
      }
      return res.status(404).send('Recipe with the specified ID does not exist');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateRecipe =  (req, res) => {
    try {
      const { id } = req.params
     Recipe.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(recipe)
          res.json(recipe)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  async function deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Recipe.findByIdAndDelete(id)
      if (deleted) {
        return res.status(200).send("Recipe deleted");
      }
      throw new Error("Recipe not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  




  module.exports = {
    getAllRecipes,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
  }