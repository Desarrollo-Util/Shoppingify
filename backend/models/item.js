const mongoose = require("mongoose");

module.exports = mongoose.model("Item", {
  name: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  note: String,
  image: String,
});
