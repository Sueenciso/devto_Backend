const { hashSync, compare, genSalt, genSaltSync } = require("bcrypt");

const hashPassword =  (password) => {
  const salt=genSaltSync(10)
  return hashSync(password, salt);
};

const verifyPassword = async (password, hash) => {
  const compareResult = await compare(password, hash);
  return compareResult;
};

module.exports = { hashPassword, verifyPassword };