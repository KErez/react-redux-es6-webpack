const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    message: 'Hello there'
  });
});

router.get('/api/models', (req, res, next) => {
  res.json(['Users3', 'Groups', 'Devices', 'Configurations', 'Posts']);
});

module.exports = router;
