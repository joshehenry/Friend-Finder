var express = require('express');

var path = require('path');
var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function () {
	
	console.log("Server listening on: http://localhost:" + PORT);
});
