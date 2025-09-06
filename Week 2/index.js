const myhttp = require("http");
const fs = require("fs").promises;

const requestListener = function (myrequest, myresponse) {
  if (myrequest.url === "/") {
    fs.readFile(__dirname + "/page.html").then(contents => {
      myresponse.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      myresponse.end(contents);
    });
  } else if (myrequest.url === "/data") {
    fs.readFile(__dirname + "/data.json").then(contents => {
      myresponse.writeHead(200, { "Content-Type": "application/json; charset=UTF-8" });
      myresponse.end(contents);
    });
  } else {
    myresponse.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
    myresponse.end("Not found");
  }
};

let myserver = myhttp.createServer(requestListener);
myserver.listen(8080, "127.0.0.1");

// JSONLINT.com for validating JSON data 