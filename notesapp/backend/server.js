require("dotenv").config();
const app = require("./src/app.js");

let port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
