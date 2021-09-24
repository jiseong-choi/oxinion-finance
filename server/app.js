const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// DB URI
// replace process.env.MONGODB_URI to yours
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () =>
  console.log(`Connected to MongoDB`)
);

// routes
const create = require("./routes/create");
const get = require("./routes/get");
const update = require("./routes/update");
const deletes = require("./routes/delete");

// API Routes
// app.use("/", () => console.log("Welcome to the API"));
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
