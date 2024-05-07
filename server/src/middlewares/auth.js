import dotenv from "dotenv";
dotenv.config();

import { catchAsyncError } from "./catch-async-error.js";
import { CustomError } from "../utils/custom-error.js";
import jwt from "jsonwebtoken";
import { UserService } from "../api/users/users.service.js";

// This middleware will check if the user is authenticated
export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  console.log(req.headers);

  const accessToken = req.headers.authorization.slice(7);

  if (!accessToken) {
    throw new CustomError(401, "Please login to access this resource.");
  }

  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  if (!decoded) {
    throw new CustomError(401, "Invalid access token.");
  }

  const user = await UserService.getUserById(decoded.id);

  if (!user) {
    throw new CustomError(404, "User not found.");
  }

  req.user = user;
  next();
});
