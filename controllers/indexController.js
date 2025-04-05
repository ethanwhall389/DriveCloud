const folderRepo = require("../models/repositories/folderRepository");

const indexPageGet = async (req, res) => {
  //redirect to root folder
  res.send("index page");
};

const IndexFolderGet = async (req, res) => {
  const folderId = req.params.folderId;
  console.log("folderid", folderId);
  const folder = await folderRepo.findById(folderId);
  console.log("success");
  console.log(folder);
  res.send("folder");
};

module.exports = {
  indexPageGet,
  IndexFolderGet,
};
