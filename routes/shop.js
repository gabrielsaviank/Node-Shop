// Library to load pages instead html fragments
const path = require('path');

const express = require('express');

// This is the helps us with our paths.
const rootDir = require('../helpers/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
