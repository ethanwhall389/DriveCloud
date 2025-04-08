const folderRepo = require("../models/repositories/folderRepository");

const indexPageGet = async (req, res) => {
  const rootFolder = await folderRepo.findRootFolder();
  res.redirect(`/folder/${rootFolder.id}`);
};

const indexFolderGet = async (req, res) => {
  const folderId = req.params.folderId;

  const folder = await folderRepo.findById(folderId);
  res.render("./pages/folder", { folder: folder });
};

module.exports = {
  indexPageGet,
  indexFolderGet,
};
