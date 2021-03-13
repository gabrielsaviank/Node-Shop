//Libraries Stuff 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs =  require('express-handlebars');
//

const app = express();

//Global configuration value
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

//Find my Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//


//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
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