const app = require("./app.js");
const port = 4000;
app.default.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

