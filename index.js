const express = require("express");
const dogRouter = require("./src/routers/dog");
const userRouter = require("./src/routers/user");
const app = new express();
const PORT = 3000;
app.use(express.json());
app.use(dogRouter);
app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
