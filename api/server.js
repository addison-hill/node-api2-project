const express = require("express");

const postsRouter = require("./posts-router");

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h2>Addison Hill</h>
    <p>Top 500 Overwatch player</p>
  `);
});

server.use("/api/posts", postsRouter);

module.exports = server;
