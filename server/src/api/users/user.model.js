import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving the user
UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  user.password = await bcryptjs.hash(user.password, 8);
  next();
});

// Compare the entered password with the hashed password
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

// Sign an access token for the user
UserSchema.methods.signAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET);
};

// Sign a refresh token for the user
UserSchema.methods.signRefreshToken = function () {
  return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET);
};

const UsersModel = mongoose.model("User", UserSchema);

export default UsersModel;
