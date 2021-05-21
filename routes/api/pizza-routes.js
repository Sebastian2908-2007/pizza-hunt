const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//set up Get all and Post at /api/pizzas/:id
router
.route('/')
.get(getAllPizza)
.post(createPizza);

// Set up Get one, PUT, and deleteat /api/pizzas/:id
router
 .route('/:id')
 .get(getPizzaById)
 .put(updatePizza)
 .delete(deletePizza);

 module.exports = router;