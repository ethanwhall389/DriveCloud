const indexPageGet = async (req, res) => {
  //redirect to root folder
  res.send("index page");
};

const IndexFolderGet = async (req, res) => {
  res.send("folder");
};

module.exports = {
  indexPageGet,
  IndexFolderGet,
};
