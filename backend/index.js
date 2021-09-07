require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

(async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connected!");

  //Mongoose Models
  const Product = mongoose.model("Product", { name: String, price: Number });

  const sandia = new Product({ name: "Sandía", price: 1 });

  await sandia.save();
  console.log("Sandía guardada");

  app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${process.env.PORT}`
    );
  });
})();
