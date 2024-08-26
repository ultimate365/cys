import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    id: String,
    name: String,
    fname: String,
    role: String,
    photoName: String,
    url: String,
    loggedin: String,
    password: {
      type: String,
      select: true,
    },
    isVerified: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema, "user");

export default User;
