// node express server for backend

const express = require("express");
const app = express();
const port = 3000;

// public directory for static files (html, css, js, images)
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
