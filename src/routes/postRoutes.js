const routes = require("express").Router();
const { authHandler } = require("../middlewares/authHandler");
const {
  create,
  update,
  del,
  getPost,
  getAllPost,
} = require("../usecases/post");

routes.post("/", async (req, res) => {
  const { tittle, tags, content, user } = req.body;
 
  try {
    const payload = await create(tittle, tags, content, creationDate, user);
    res.json({ ok: true, message: "Post created successfuly", payload });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { tittle, tags, content } = req.body;

  try {
    const data = { tittle, tags, content };
    const post = await update(id, data);
    res.json({ ok: true, payload: post });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});



module.exports = routes;
