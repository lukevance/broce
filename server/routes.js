const router = require('express').Router();

// require controllers for all routes
// const auth = require('../controllers/auth.controller');
// const orders = require('../controllers/orders.controller');
const parts = require('./controllers/parts.controller');
const users = require('./controllers/users.controller');

// router.use('/auth', auth);
// router.use('/orders', orders);
router.use('/parts', parts);
router.use('/users', users);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
