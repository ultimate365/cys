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
    membershipYear: Number,
    tv: Number,
    Sep23: Number,
    Oct23: Number,
    Nov23: Number,
    Dec23: Number,
    Jan24: Number,
    Feb24: Number,
    Mar24: Number,
    Apr24: Number,
    May24: Number,
    Jun24: Number,
    Jul24: Number,
    Aug24: Number,
    Sep24: Number,
    Oct24: Number,
    Nov24: Number,
    Dec24: Number,
    Jan25: Number,
    Feb25: Number,
    Mar25: Number,
    Apr25: Number,
    May25: Number,
    Jun25: Number,
    Jul25: Number,
    Aug25: Number,
    Sep25: Number,
    Oct25: Number,
    Nov25: Number,
    Dec25: Number,
  },
  {
    timestamps: true,
  }
);

const Member =
  mongoose.models.member || mongoose.model("member", memberSchema, "member");

export default Member;
