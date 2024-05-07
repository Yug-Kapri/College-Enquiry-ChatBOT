import { CommentsService } from "./comments.service.js";
import { catchAsyncError } from "../../middlewares/catch-async-error.js";
import { CustomError } from "../../utils/custom-error.js";
import { createCommentSchema } from "./comments.zod-schema.js";

// ROUTE: POST /api/comments - [Everyone]
const addComment = catchAsyncError(async (req, res) => {
  const response = createCommentSchema.safeParse(req.body);

  if (!response.success) {
    throw new CustomError(400, "Invalid name or email.");
  }

  await CommentsService.createComment(response.data);

  res.status(201).json({
    success: true,
    message: "New Comment added successfully.",
  });
});

export const CommentController = {
  addComment,
};
