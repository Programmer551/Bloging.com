const mongoose = require("mongoose");

if (mongoose.connection.models["blogs"]) {
  // Model already exists, no need to redefine
  console.log("Model 'blogs' already exists");
  module.exports = mongoose.model("blogs");
} else {
  // Define the model
  const contactSchema = new mongoose.Schema({
    blog: {
      type: String,
      required: [true, "Must Provide the blogs!"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Must Provide the Title!"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Must Provide the Category!"],
    },
    id: {
      type: String,
      required: [true, "Must Provide the Id!"],
    },
    name: {
      type: String,
      required: [true, "Must Provide the Name!"],
    },
  });

  // Try to delete the existing model
  try {
    delete mongoose.connection.models["blogs"];
    console.log("Model 'blogs' deleted from mongoose.models");
  } catch (error) {
    console.error("Error deleting model 'blogs':", error.message);
  }

  // Create and export the model
  const blogs = mongoose.model("blogs", contactSchema);
  console.log("Model 'blogs' defined and exported");
  module.exports = blogs;
}
