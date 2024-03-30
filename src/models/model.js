const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  lineId: {
    type: Number,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
});

const Model =
  mongoose.models.UserModel || mongoose.model("UserModel", modelSchema);

export default Model;
