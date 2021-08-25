var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app
  .get("/", (req, res) => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    return res.redirect("index.html");
  })
  .listen(3000);

mongoose.connect("mongodb://l ocalhost:27017/mydb", {
  useNewUrlParsel: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting to database");
});
db.once("open", () => {
  console.log("Connected to database");
});

app.post("/sign_up", (req, res) => {
  var name = req.body.name;
  var phone = req.body.phone;
  var city = req.body.city;

  var data = { name: name, email: email, city: city };

  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record installed successfully");
  });

  return res.redirect("signup_success.html");
});
console.log("listen on port 3000");
