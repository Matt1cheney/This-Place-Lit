// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App (copy & paste)
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Table Info
var tables = [
  //array of Table objects
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/reservations.html"));
});

// get new res info
app.post("/api/tables", function(req, res) {
  let newTable = req.body;

  console.log(`newTable: ${newTable}`);

  tables.push(newTable);

  res.send(tables.length <= 5);
  }
);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

