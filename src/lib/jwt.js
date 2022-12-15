const { sign, verify } = require("jsonwebtoken");
const { app } = require("./config");

const createToken = (payload) => sign(payload, app.secret, { expiresIn: "1h" });
console.log(createToken);
const verifyToken = (token) => verify(token, app.secret);
console.log(verifyToken);
module.exports = { createToken, verifyToken };