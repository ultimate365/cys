import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    fname: String,
    phone: {
      type: String,
      unique: true,
    },
    role: String,
    isRegistered: Boolean,
    isVerified: Boolean,
  },
  {
    timestamps: true,
  }
);

const Member =
  mongoose.models.member || mongoose.model("member", memberSchema, "member");

export default Member;
