let express = require("express");
let exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

let app = express();
let PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on PORT: http://localhost:${PORT}`);
});