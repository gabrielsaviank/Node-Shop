//Libraries and required stuff 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//

const app = express();

//Routes Call
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//

//Routing Stuff 
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname, '..', 'views', '404.html')
});
//

//Port Listen 
app.listen(3000, function (params) {
    console.log("ALLESYS: Server Started on Port 7000");
});
