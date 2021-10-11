const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prifix of '/pizzas' to routes created in 'pizza-route.js'
router.use('/pizzas', pizzaRoutes);

module.exports = router;