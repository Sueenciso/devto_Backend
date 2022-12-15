const User = require("../../models/user").model;
const { hashPassword, verifyPassword } = require("../../lib/encrypt");
const { createToken, verifyToken } = require("../../lib/jwt");

const create = async (email, password, userName) => {
  
  const hash = await hashPassword(password);

  const user = new User({ email, hash, userName });

  return await user.save();
};

const update=async(id,password,userName)=>{

  const hash=await hashPassword(password);

  return await User.findByIdAndUpdate(id, {hash, userName})
};

const findByEmail = async (email) => await User.findOne({ email });

const authenticate = async (email, password) => {
    const user = await findByEmail(email);
    const hash = user.hash;
  console.log(password,hash,user);
    const isVerified = await verifyPassword(password, hash);
    if (!isVerified) throw new Error("Wrong password");
    return createToken({ sub: user._id });
  };


  module.exports={
    create,
    update,
    authenticate,
  }