import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
