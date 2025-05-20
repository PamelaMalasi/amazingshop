// Import modules
const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contactRoute");
const itemRoute = require("./routes/itemRoute");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);


app.use(express.json({ limit: "1000mb", extended: true }));


app.use("/images", express.static(path.join(__dirname, "/images")));


app.get("/", (req, res) => {
  res.send("Backend is working!");
});

//MongoDB
mongoose
  .connect(
    "mongodb+srv://pamelamalasi31:amazingshop@projectmern.bgjnnfr.mongodb.net/amazingshop?retryWrites=true&w=majority&appName=ProjectMERN"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

//routes
app.use(contactRoute);
app.use(itemRoute);

//port 5000
app.listen(5000, () => {
  console.log("Server created on port 5000!");
});
