const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.get("/form", (req, res) => {
    res.send("Hello World! form");
  });
};
module.exports = routes;
