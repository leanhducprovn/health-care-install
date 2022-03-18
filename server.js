var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Health Care");
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log(`Health care at http://localhost:${port}`);
});
