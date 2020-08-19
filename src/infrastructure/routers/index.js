const express = require('express');
const router = express.Router();

const { healthCheck } = require('../controllers/health')

router.get('/health', healthCheck)

router.get('/products', function(req, res) {
  res.send('About birds');
});

module.exports = router;
