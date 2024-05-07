export const catchAsyncError = (asyncHandler) => async (req, res, next) => {
  try {
    await asyncHandler(req, res, next);
  } catch (error) {
    next(error);
  }
};
