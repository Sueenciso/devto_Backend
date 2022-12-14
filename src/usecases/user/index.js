const User = require("../../models/user").model;
const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const { createToken, verifyToken } = require("../../lib/jwt");

const create = async (data) => {
  const { email, password, userName } = data;

  const hash = await hashPassword(password);

  const user = new User({ email, password: hash, userName });
  return await user.save();
};

const update=async(id,data)=>await User.findByIdAndUpdate(id, data);;

const authenticate = async (email, password) => {
    const user = await findByEmail(email);
    const hash = user.password;
  
    const isVerified = await verifyPassword(password, hash);
    if (!isVerified) throw new Error("Wrong password");
    return createToken({ sub: user._id });
  };

  module.exports={
    create,
    update,
    authenticate,
  }