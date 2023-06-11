import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.JWT_Token;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(400);
      throw new Error("Not Authorized, Invalid Token");
    }
  } else {
    res.status(400);
    throw new Error("Not Authorized, No Token Found..");
  }
});

export { protect };
