require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// connect db
const db = require("./db/db");
db();

// api routes draft version
app.use("/api/compounds", require("./routes/CompoundRoutes"));

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
