import jwt from "jsonwebtoken";

export function userMiddleware (req,res,next) {
    const token = req.headers.authorization;

  if (!token || !token.startswith("Bearer ")) {
    return res.status(403).json({
      message: "Error, Please try again.",
    });
  }
    const jwttoken = token.split(" ")[1];
   try 
   {
     const token_verify = jwt.verify(jwttoken,process.env.JWT_SECRET_KEY);
    if (token_verify) {
          req.header = token_verify.userid;
          next();
    }
    else {
        return res.json({
            message:"You are not authorized"
        })
    }}
    catch(error) {
        console.log(error);
        return res.json({
            message:"Something went wrong while validating the user, Please try again."
        })
    }
}