const express = require('express');
const { postlaptop, getlaptops } = require('../Controller/admin.controller');

const router = express.Router();

// admin  uploading laptop
router.post('/upload', postlaptop);

router.get('/viewlaptops', getlaptops);

module.exports = router;
