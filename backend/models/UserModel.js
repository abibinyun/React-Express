import mongoose from "mongoose";

const User = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model("Users", User);
