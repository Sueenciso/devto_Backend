const routes = require("express").Router();
const { authHandler } = require("../middlewares/authHandler");
const {
  create,
  update,
  del,
  getPost,
  getAllPost,
} = require("../usecases/post");

routes.get("/", async (req, res) => {
  try {
    const post = await getAllPost();
    res.json({ ok: true, payload: post });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message: error });
  }
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { tittle, img, tags, content } = await getPost(id);
    res.json({ ok: true, payload: { tittle, img, tags, content} });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

routes.post("/", authHandler, async (req, res) => {
  const { tittle, img, tags, content } = req.body;
  const user=req.params.token.sub;
 

  try {
    const payload = await create(tittle, img, tags, content, user);
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

routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await del(id);

    res.json({ ok: true, payload: post });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

module.exports = routes;
