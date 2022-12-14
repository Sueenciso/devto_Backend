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

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { tittle,tags,content,creationDate } = req.body;

  try {
    const data = { name, products };
    const category = await taskUseCases.update(id, data);
    res.json({ ok: true, payload: category });
  } catch (error) {
    const {message}=error;
    res.status(400).json({ ok: false, message: error });
  }
});

module.exports=router;