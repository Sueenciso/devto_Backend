const routes = require("express").Router();
const { create, update, authenticate } = require("../usecases/user");

routes.post("/", async (req, res) => {
  const { email, password, userName } = req.body;
  console.log(req.body);

  try {
    const payload = await create(email, password, userName);
    res.json({ ok: true, message: "User created successfuly", payload });
  } catch (error) {
    const { message } = error;
    console.log(error);
    res.status(400).json({ ok: false, message });
  }
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { userName } = req.body;

  try {
    const data = { userName };
    const user = await update(id, data);
    res.json({ ok: true, payload: user });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

routes.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const payload = await authenticate(email, password);
    res.status(202).json({ ok: true, payload });
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
});


module.exports = routes;
