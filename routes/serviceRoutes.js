const express = require('express');
const router = express.Router();
const serviceControllers = require('../controllers/serviceController');

router.get('/', serviceControllers.index);
router.get('/:service', serviceControllers.search);
router.post('/:service/results', serviceControllers.results);

module.exports = router;
