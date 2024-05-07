import { omit } from "./omit.js";

export const sanitizeUser = (user, fieldsToRemove = []) => {
  const fields = [
    "password",
    "__v",
    "createdAt",
    "updatedAt",
    ...fieldsToRemove,
  ];

  return omit(user.toObject(), fields);
};
