// node express server for backend

const history = require("connect-history-api-fallback");
const express = require("express");
const app = express();
const port = 3000;

// redirect all requests to index.html
app.use(history());
// public directory for static files (html, css, js, images)
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
