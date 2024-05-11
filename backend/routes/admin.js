import { Router } from "express";

export const adminrouter = Router();

adminrouter.get("/",async (req,res)=>{
    return res.send("This is the admin route")
})