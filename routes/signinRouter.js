const { Router } = require("express");
const signinController = require("../controllers/signinController");

const signinRouter = Router();

signinRouter.get("/", signinController.signinPageGet);

module.exports = signinRouter;
