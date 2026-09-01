let http = require("http");
let server = http.createServer((req, res) => {
  console.log("Request has been made from browser to server");
  res.end("Hello, World!");
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
