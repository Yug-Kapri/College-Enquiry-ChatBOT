import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CommentsModel = mongoose.model("Comment", CommentSchema);

export default CommentsModel;
