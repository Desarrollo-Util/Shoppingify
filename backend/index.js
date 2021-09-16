require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 4000;

const ItemModel = require("./models/item");
const CategoryModel = require("./models/category");
const ListModel = require("./models/list");
const UserModel = require("./models/user");

const index = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connected!");

  app.use(cors());
  app.use(express.json());

  app.post("/item", async (req, res) => {
    const newItem = req.body;

    try {
      const itemCreated = new ItemModel(newItem);
      await itemCreated.save();
      res.status(201).send("Todo ha ido genial");
    } catch (err) {
      console.error("\nERROR CATCH\n" + err.message + "\n\n");
      res.status(400).send(err.message);
    }
  });

  app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${process.env.PORT}`
    );
  });
};

index();
