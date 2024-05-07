import { UserService } from "./users.service.js";
import { catchAsyncError } from "../../middlewares/catch-async-error.js";
import { CustomError } from "../../utils/custom-error.js";
import { createUserSchema, loginUserSchema } from "./user.zod-schema.js";
import { sanitizeUser } from "../../utils/sanitize-user.js";
import jwt from "jsonwebtoken";

// ROUTE: GET /api/v1/users/me - [Authenticated User]
export const getMe = catchAsyncError(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new CustomError(404, "User not found.");
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully.",
    data: sanitizeUser(user),
  });
});

// ROUTE: POST /api/users/register - [Everyone]
const registerUser = catchAsyncError(async (req, res) => {
  const response = createUserSchema.safeParse(req.body);

  if (!response.success) {
    throw new CustomError(400, "Invalid name, email or password.");
  }

  const existingUser = await UserService.getUserByEmail(response.data.email);

  if (existingUser) {
    throw new CustomError(400, "User with this email already exists.");
  }

  const user = await UserService.createUser(response.data);

  res.status(201).json({
    success: true,
    message: "User registered successfully.",
    data: sanitizeUser(user),
  });
});

// ROUTE: POST /api/v1/users/login - [Everyone]
export const loginUser = catchAsyncError(async (req, res) => {
  console.log(req.body)
  const response = loginUserSchema.safeParse(req.body);

  if (!response.success) {
    throw new CustomError(400, "Invalid email or password.");
  }

  console.log(response.data)

  const { email, password } = response.data;

  const user = await UserService.getUserByEmail(email);

  if (!user) {
    throw new CustomError(400, "Invalid email or password.");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new CustomError(400, "Invalid email or password.");
  }

  const accessToken = user.signAccessToken();

  console.log(accessToken);

  res.status(200).json({
    success: true,
    message: "User logged in successfully.",
    data: {
      user: sanitizeUser(user),
      accessToken,
    },
  });
});

export const UserController = {
  registerUser,
  loginUser,
  getMe,
};
