const mongoose = require("mongoose");

module.exports = mongoose.model("Item", {
  name: { type: String, required: true, unique: true },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  note: { type: String, required: false },
  image: {
    type: String,
    default: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
  },
});
