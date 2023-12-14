// Import the Mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided URI or default to a local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Enable Mongoose to log database operations for debugging purposes
mongoose.set("debug", true);

// Export the Mongoose connection object for use in other parts of the application
module.exports = mongoose.connection;
