const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexPageGet);
indexRouter.get("/folder/:folderId", indexController.indexFolderGet);

module.exports = indexRouter;
