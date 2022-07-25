const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",


  /*origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,*/
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded


//app.use(express.urlencoded({ extended: true })); original
// simple route

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/tutorial.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
})*/