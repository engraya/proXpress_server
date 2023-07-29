const express = require("express");

const app = express();


app.listen(5000, ()=> {
    console.log("Server is listening at port 5000........")
});

app.get("/", function(request, response) {
    // response.send("Welcome to Your Express Home Page...!")
    response.render('index', {note:"Express is a Backend Framework!"});
});

app.set("view engine", "ejs");
