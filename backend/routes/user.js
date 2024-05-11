import { Router } from "express";
import { PrismaClient } from "@prisma/client";
export const userrouter = Router();
const prisma = new PrismaClient();
userrouter.get("/", async (req, res) => {
  res.send("this is the best of the best");
});

userrouter.post("/", async (req, res) => {
  const reponsegot = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        Username: reponsegot.Username,
        Email: reponsegot.Email,
        Password: reponsegot.Password,
      },
    });

    res.json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Something went wrong while creating a user.",
    });
  }
});
