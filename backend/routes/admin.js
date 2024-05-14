import { Router } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AdminMiddleware } from "../middlewares/admin.js";
const prisma = new PrismaClient();
dotenv.config({
  path: "../.env",
});
export const adminrouter = Router();

adminrouter.post("/signup", async (req, res) => {
  const Adminpayload = req.body;
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        Email: Adminpayload.Email,
      },
    });
    if (admin) {
      return res.status(411).json({
        message: "Admin already exists",
      });
    }

    const salt = await bcrypt.genSalt(5);
    const hashedpassword = await bcrypt.hash(Adminpayload.Password, salt);

    const newadmin = await prisma.admin.create({
      data: {
        AdminName: Adminpayload.AdminName,
        Email: Adminpayload.Email,
        PhoneNumber: Adminpayload.PhoneNumber,
        Password: hashedpassword,
      },
    });

    const token = jwt.sign({ admin: newadmin.id }, process.env.JWT_SECRET_KEY);

    return res.json({
      message: "Admin created Successfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating Admin. Please try again.",
      details: error,
    });
  }
});

adminrouter.post("/signin", async (req, res) => {
  const Adminpayload = req.body;
  try {
    const findingadmin = await prisma.admin.findFirst({
      where: {
        Email: Adminpayload.Email,
      },
    });
    if (findingadmin) {
      const checkpassword = await bcrypt.compare(
        Adminpayload.Password,
        findingadmin.Password
      );

      if (checkpassword) {
        const token = jwt.sign(
          { adminid: findingadmin.id },
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
    return res.status(500).json({
      message: "Error while Signing In. Please try again.",
      details: error,
    });
  }
});


adminrouter.post("/createproduct",AdminMiddleware,async (req,res)=>{
    const payload = req.body;
    try {
        const findAdmin = await prisma.admin.findFirst({
            where:{
                id:payload.AdminId
            }
        })
        if (findAdmin){
           const newproduct = await prisma.product.create({
            data:{
                Title:payload.Title,
                Description:payload.Description,
                AdminId:payload.AdminId
            }
           })

           return res.json({
            message:"Product Created Successfully.",
            product : newproduct
           })
        }
        else{
            return res.status(400).json({
                message:"Can't post product because Admin does not exist"
            })
        }
    }
    catch(error) {
           return res.status(500).json({
            message:"Something went wrong while creating the product. Please try again."
           })
    }
})