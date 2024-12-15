const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("server connected..,");
});

app.listen(port, () => {
    console.log("server as running at ${port} portal.");
})