const mongoose = require("mongoose");

if (mongoose.connection.models["Contact"]) {
  // Model already exists, no need to redefine

  module.exports = mongoose.model("Contact");
} else {
  // Define the model
  const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Must Provide the Email!"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Must Provide the Message!"],
      trim: true,
    },
  });

  // Try to delete the existing model
  try {
    delete mongoose.connection.models["Contact"];
  } catch (error) {
    console.error("Error deleting model 'Contact':", error.message);
  }

  // Create and export the model
  const Contact = mongoose.model("Contact", contactSchema);

  module.exports = Contact;
}
