const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Relational to NoSQL Migration Project");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
