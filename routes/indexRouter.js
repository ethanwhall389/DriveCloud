const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexPageGet);
indexRouter.get("/folder/:folderId", indexController.indexFolderGet);

//indexRouter.get("/file/:fileId", indexController.fileDownloadGet)

indexRouter.post("/folder/:parentFolderId", indexController.childFolderPost);

module.exports = indexRouter;
