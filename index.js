const express = require("express");
const routers = require("./src/routers/dog");
const app = new express();
const PORT = 3000;
app.use(express.json());
app.use(routers);

app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
