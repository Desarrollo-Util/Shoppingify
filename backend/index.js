require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

const ItemModel = require("./models/item");
const CategoryModel = require("./models/category");
const ListModel = require("./models/list");
const UserModel = require("./models/user");

const index = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connected!");

  const pollo = await ItemModel.findByIdAndUpdate(
    "613a44098a5282694bbf6fb8"
  ).exec();

  pollo.category = "613a4440b8176505f66cfed5";

  await pollo.save();

  app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${process.env.PORT}`
    );
  });
};

index();
