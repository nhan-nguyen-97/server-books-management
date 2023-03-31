const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");

const db = require("./config/db");
const route = require("./routes");

const app = express();
const PORT = 5000;

// Connect DB
db.connect();

// Server Setting
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ limit: "30mb" }));
app.use(cors())
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Routes init
route(app);
