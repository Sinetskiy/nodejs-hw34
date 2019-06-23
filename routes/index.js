const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index.js');
const loginCtrl = require('../controllers/login.js');
const adminCtrl = require('../controllers/admin.js');

router.get('/', indexCtrl.get);
router.post('/', indexCtrl.post);
router.get('/login', loginCtrl.get);
router.post('/login', loginCtrl.post);
router.get('/admin', adminCtrl.get);
router.post('/admin/upload', adminCtrl.addProduct);
router.post('/admin/counters', adminCtrl.updateCounters);


module.exports = router;
