// Library to load pages instead html fragments
const path = require('path');

const express = require('express');

// This is the helps us with our paths.
const rootDir = require('../helpers/path');

//Router
const router = express.Router();
//

//Get
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
//

module.exports = router;
