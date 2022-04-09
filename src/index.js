const app = require("./index.jsx");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening on " + port);
});
