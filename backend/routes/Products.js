import { Router } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
dotenv.config({
  path: "../.env",
});
export const productrouter = Router();
productrouter.get("/bulk", async (req, res) => {
  try {
    const allproducts = await prisma.product.findMany({
      select: {
        Title: true,
        Description: true,
        createdAt: true,
        Admin: {
          select: {
            AdminName: true,
            Email: true,
          },
        },
      },
    });

    return res.json({
        allproducts:allproducts
    })
  } catch (error) {
    console.error(error)
    return res.json({
      message: "Error while fetching all products. Please try again.",
      details:error
    });
  }
});


productrouter.get("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const product = await prisma.product.findFirst({
            where:{
                id:id
            }
        })
        if (product) {
            return res.json({
                product:product
            })

        }
        
        else {
           return res.status(411).json({
            message:"Invalid Request, Product does not exist"
           })
        }
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({
            message:"Something went wrong while fetching the product. Please try again.",
            details:error
        })
    }
})