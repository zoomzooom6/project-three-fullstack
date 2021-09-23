const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lets-eat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

module.exports = mongoose.connection;
