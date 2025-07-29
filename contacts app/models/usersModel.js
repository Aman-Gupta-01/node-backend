import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email address is required"],
    unique: [true, "This email is already registerd"]
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  }
},{timestamps:true})

export default mongoose.model("User", usersSchema)