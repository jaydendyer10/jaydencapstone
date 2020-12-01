const { Router } = require('express');
require('../models/item');
const items = require('./items');

const router = Router();

router.use('/items', items)

module.exports = router;