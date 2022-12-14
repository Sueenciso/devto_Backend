const usersRouter = require("./userRoutes");
const postRouter = require("./postRoutes");

const apiRouter = (app) => {
  app.use("/users", usersRouter);
  app.use("/post", postRouter);
};

module.exports = apiRouter;
