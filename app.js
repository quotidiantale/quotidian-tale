const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const static = express.static(__dirname + '/public');
app.use("/public", static);
app.use(bodyParser.json());
var hbs = require('handlebars');
hbs.registerHelper("concat", function(status)
{
    //console.log(status)
    return "localhost:3000/restaurants/"+status
});
configRoutes(app);
//Jasmeet
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});