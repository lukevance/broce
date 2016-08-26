const router = require('express').Router();

// require controllers for all routes
const auth = require('./controllers/auth.controller');
const quotes = require('./controllers/quotes.controller');
const orders = require('./controllers/orders.controller');
const parts = require('./controllers/parts.controller');
const users = require('./controllers/users.controller');
const accounts = require('./controllers/accounts.controller');

router.use('/auth', auth);
router.use('/quotes', quotes);
router.use('/orders', orders);
router.use('/parts', parts);
router.use('/users', users);
router.use('/accounts', accounts);

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ title: 'Broce Parts Api' });
});

module.exports = router;
