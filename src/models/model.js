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
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
});

const Model =
  mongoose.models.ApplicantModel ||
  mongoose.model("ApplicantModel", modelSchema);

export default Model;
