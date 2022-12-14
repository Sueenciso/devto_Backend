const router = require("express").Router();
const { create,
    update,
    del,
    getPost,
    getAllPost, } = require("../usecases/post");

router.post("/", async (req, res) => {
  const { tittle,tags,content,creationDate,user } = req.body;

  try {
    const payload = await create(tittle,tags,content,creationDate,user);
    res.json({ ok: true, message: "Post created successfuly", payload });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

module.exports=router;