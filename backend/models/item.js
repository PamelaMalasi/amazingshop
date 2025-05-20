const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  itemDescription: {
    type: String,
  },
  itemImage: {
    type: String,
  },
  itemPrice: {
    type: Number, 
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
