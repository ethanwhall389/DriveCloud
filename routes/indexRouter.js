const { Router } = require("express");
const indexController = require("../controllers/indexController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const indexRouter = Router();

indexRouter.get("/", indexController.indexPageGet);

indexRouter.get("/folder/:folderId", indexController.indexFolderGet);

indexRouter.post(
  "/folder/:folderId/file",
  upload.single("file"),
  indexController.indexFileUpload
);

//indexRouter.get("/file/:fileId", indexController.fileDownloadGet)

indexRouter.post("/folder/:parentFolderId", indexController.childFolderPost);

module.exports = indexRouter;
