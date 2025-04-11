const { format } = require("date-fns");
const formatSize = require("../utils/formatSize");
const folderServices = require("../services/folderServices");
const fs = require("fs");
const uploadFile = require("../utils/uploadFile");

const folderRepo = require("../models/repositories/folderRepository");

const indexPageGet = async (req, res) => {
  const rootFolder = await folderRepo.findRootFolder();
  res.redirect(`/folder/${rootFolder.id}`);
};

const indexFolderGet = async (req, res) => {
  const folderId = req.params.folderId;

  const folder = await folderRepo.findById(folderId);

  folder.modified = format(folder.modified, "MMM dd, yy");
  folder.children = folder.children.map((child) => ({
    ...child,
    modified: format(child.modified, "MMM dd, yy"),
  }));
  folder.files = folder.files.map((file) => ({
    ...file,
    modified: format(file.modified, "MMM dd, yy"),
    fileSize: formatSize(file.fileSize),
  }));

  res.render("./pages/folder", { folder: folder });
};

const childFolderPost = async (req, res) => {
  const { name } = req.body;
  //TEMP TEST USER ID:
  const userId = 5;
  const { parentFolderId } = req.params;
  await folderServices.createFolder(name, userId, parentFolderId);
  res.redirect(`/folder/${parentFolderId}`);
};

const indexFileUpload = async (req, res) => {
  const { folderId } = req.params;
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  console.log(req.file);
  const { buffer, originalname, mimetype } = req.file;
  const path = `${folderId}/${originalname}`;
  try {
    const uploadResult = await uploadFile("all-files", path, buffer, mimetype);

    res.status(200).json({
      message: "File uploaded successfully",
      path: uploadResult.path,
      //publicUrl: getPublicUrl("my-bucket", filePath),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
};

module.exports = {
  indexPageGet,
  indexFolderGet,
  childFolderPost,
  indexFileUpload,
};
