
const mongoose = require("mongoose");

if (mongoose.connection.models["Blog"]) {
  // Model already exists, no need to redefine
  console.log("Model 'Blog' already exists");
  module.exports = mongoose.model("Blog");
} else {
  // Define the model
  const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Must Provide the email!"],
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
    delete mongoose.connection.models["Blog"];
    console.log("Model 'Blog' deleted from mongoose.models");
  } catch (error) {
    console.error("Error deleting model 'Blog':", error.message);
  }

  // Create and export the model
  const Blog = mongoose.model("Blog", contactSchema);
  console.log("Model 'Blog' defined and exported");
  module.exports = Blog;
}
