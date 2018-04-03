const express = require ('express');
const path = require("path");
//configure express
const app = express();
const PORT = process.env.PORT || 8000;

// the following route is made for the server to communicate with the request coming in from the client side.
app.get('/test', function(req, res){
  res.json({name: "Baraka",id: 1234})
})

//Listening to the port
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });