const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index.js');
const loginCtrl = require('../controllers/login.js');
const adminCtrl = require('../controllers/admin.js');
const productsCtrl = require('../controllers/products.js');
const countersCtrl = require('../controllers/counters.js');

router.get('/', indexCtrl.get);
router.post('/', indexCtrl.post);
router.get('/login', loginCtrl.get);
router.post('/login', loginCtrl.post);
router.get('/admin', adminCtrl.get);
router.post('/admin/upload', productsCtrl.add);
router.post('/admin/counters', countersCtrl.update);


module.exports = router;
