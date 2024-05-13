import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("server is connected");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost${PORT}`);
});
