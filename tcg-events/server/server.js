const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { appRoute } = require("./routes/user");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
const port = 4100;
appRoute(app);
app.listen(port, () => console.log(`Server running ${port}`));
