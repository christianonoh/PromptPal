import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: [true, 'Email already exists'],
  },
  username: {
    type: String,
    required: [true, 'User name is required'],
    minlength: 8,
    maxlength: 20,
    match: [/^[a-zA-Z0-9]+$/, 'User name is not valid'],
    unique: [true, 'User name already exists'],
  },
  image: {
    type: String,
    // default: '/images/default-profile.png',
  },
});

const User = models.User || model("User", userSchema);

export default User;
