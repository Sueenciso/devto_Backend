const router = require("express").Router();
const { create, update, authenticate } = require("../usecases/user");

router.post("/", async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const payload = await create(email, password, userName);
    res.json({ ok: true, message: "User created successfuly", payload });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});


module.exports=router;