import { Router } from "express";
import { UserController } from "./user.controller.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const usersRouter = Router();

usersRouter.get("/me", isAuthenticated, UserController.getMe);

usersRouter.post("/register", UserController.registerUser);
usersRouter.post("/login", UserController.loginUser);

export default usersRouter;
