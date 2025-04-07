const folderRepo = require("../models/repositories/folderRepository");

const indexPageGet = async (req, res) => {
  const rootFolder = await folderRepo.findRootFolder();
  res.redirect(`/folder/${rootFolder.id}`);
};

const indexFolderGet = async (req, res) => {
  const folderId = req.params.folderId;

  await folderRepo.createFolder("Development", 2, folderId);
  await folderRepo.createFolder("alwaysDebugging", 2, folderId);

  const folder = await folderRepo.findById(folderId);
  res.render("./pages/folder", { folder: folder });
};

module.exports = {
  indexPageGet,
  indexFolderGet,
};
