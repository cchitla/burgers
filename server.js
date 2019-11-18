let express = require("express");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);


app.listen(PORT, () => {
    console.log(`Server listening on PORT: http://localhost:${PORT}`);
});