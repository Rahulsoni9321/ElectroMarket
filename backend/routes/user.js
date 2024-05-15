import { Router } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const userrouter = Router();
const prisma = new PrismaClient();
dotenv.config({
  path: "../.env",
});

userrouter.post("/signup", async (req, res) => {
  const userpayload = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        Email: userpayload.Email,
      },
    });
    if (user) {
      return res.status(411).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(5);
    const hashedpassword = await bcrypt.hash(userpayload.Password, salt);

    const newuser = await prisma.user.create({
      data: {
        Username: userpayload.Username,
        Email: userpayload.Email,
        Password: hashedpassword,
      },
    });

    const token = jwt.sign({ userid: newuser.id }, process.env.JWT_SECRET_KEY);

    return res.json({
      message: "User created Successfully",
      token: token,
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: "Error while creating User. Please try again.",
      details: error,
    });
  }
});

userrouter.post("/signin", async (req, res) => {
  const userpayload = req.body;
  try {
    const findinguser = await prisma.user.findFirst({
      where: {
        Email: userpayload.Email,
      },
    });
    if (findinguser) {
      const checkpassword = await bcrypt.compare(
        userpayload.Password,
        findinguser.Password
      );

      if (checkpassword) {
        const token = jwt.sign(
          { userid: findinguser.id },
          process.env.JWT_SECRET_KEY
        );
        return res.json({
          message: "Signed In successfully",
          token: token,
        });
      } else {
        return res.status(411).json({
          message: "Invalid Password, Please try again",
        });
      }
    } else {
      return res.status(401).json({
        message: "Bad Credentials. Please try again.",
      });
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: "Error while Signing In. Please try again.",
      details: error,
    });
  }
});





