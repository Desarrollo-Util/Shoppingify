const mongoose = require("mongoose");

module.exports = mongoose.model("List", {
  name: String,
  state: String,
  items: {
    type: [mongoose.Types.ObjectId],
    ref: "Item",
  },
});
