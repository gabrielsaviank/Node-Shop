const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('../../../Downloads/01-defining-a-model/controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('../../../Downloads/01-defining-a-model/routes/admin');
const shopRoutes = require('../../../Downloads/01-defining-a-model/routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
