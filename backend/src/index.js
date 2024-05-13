import express from "express";
import dotenv from "dotenv";

import { userrouter } from "../routes/user.js";
import { adminrouter } from "../routes/admin.js";
import cors from "cors";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userrouter);
app.use("/api/v1/admin", adminrouter);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
