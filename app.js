const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("express-session");

//ROUTER IMPORTS
const indexRouter = require("./routes/indexRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

//ROUTES
//404 route
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use((req, res) => res.status(404).render("pages/404"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
