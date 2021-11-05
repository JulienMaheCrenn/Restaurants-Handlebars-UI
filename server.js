const express = require("express");
const app = express();
const port = 8001;
const restaurantRoutes = require("./routes/web/restaurants");
const menuRoutes = require("./routes/web/menus");
const menuItemRoutes = require("./routes/web/menuItems");
const handlebars = require("./handlebars");

app.engine("handlebars", handlebars);
app.set('view engine', "handlebars");



app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

app.use("/restaurants", restaurantRoutes);
app.use("/menus", menuRoutes);
app.use("/menuitems", menuItemRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});