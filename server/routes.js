var express = require('express');
var router = express.Router();
var glassdoorApi = require('./glassdoorApi.js');

router.post('/', glassdoorApi.post);

module.exports = router;
