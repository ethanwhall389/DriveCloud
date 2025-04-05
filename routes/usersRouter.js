const { Router } = require("express");
const usersController = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", (req, res) => res.redirect("/"));
usersRouter.get("/sign-up", usersController.signUpPageGet);
usersRouter.get("/log-in", usersController.logInPageGet);

module.exports = usersRouter;
