const signUpPageGet = async (req, res) => {
  res.send("sign up");
};

const logInPageGet = async (req, res) => {
  res.send("log in");
};

module.exports = {
  signUpPageGet,
  logInPageGet,
};
