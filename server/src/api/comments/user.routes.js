import { Router } from "express";
import { CommentController } from "./comments.controller.js";

const commentsRouter = Router();

commentsRouter.post("/", CommentController.addComment);

export default commentsRouter;
