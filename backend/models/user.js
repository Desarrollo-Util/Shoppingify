const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  lists: {
    type: [mongoose.Types.ObjectId],
    ref: "List",
  },
});
