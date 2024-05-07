import CommentsModel from "./comment.model.js";

export const CommentsService = {
  createComment: (data) => CommentsModel.create(data),
};
