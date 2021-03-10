//Libraries Stuff 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//

const app = express();

//Find my Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//


//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
//

//Port
app.listen(3000, function() {
    console.log("AlleSys: Listening on port 3000");
});
//