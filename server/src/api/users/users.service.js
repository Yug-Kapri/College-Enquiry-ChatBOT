import UserModel from "./user.model.js";

export const UserService = {
  createUser: (data) => UserModel.create(data),

  getUserById: (id) => UserModel.findById(id),

  getUserByEmail: (email) => UserModel.findOne({ email }),
};
