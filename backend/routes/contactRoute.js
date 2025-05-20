const express = require("express");
const app = express();
const contactModel = require("../models/contact.js");

//Create
app.post("/createContact/", async (req, res) => {
    try {
      const newContact = new contactModel(req.body)
      await newContact.save()
      res.status(200).send(newContact)
  } catch (err) {
    //Ne terminal
    console.log(err)
    res.status(500).send("Contact not saved" + err);
  }
});

module.exports = app;