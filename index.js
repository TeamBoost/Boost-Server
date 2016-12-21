var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

app.listen(process.env.PORT || 3000, function() {
  console.log("Connected");
});
