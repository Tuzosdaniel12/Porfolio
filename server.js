const express = require("express");
const exphbs = require("express-handlebars");



//set up the express app

const app = express();
const PORT = process.env.PORT || 3002

//set public folder
app.use(express.static("public"));

//set up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
app.use(require("./routes"))

//start server

app.listen(PORT, ()=>{console.log("App listening on http://LocalHost:" + PORT)})




