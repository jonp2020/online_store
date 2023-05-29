const app = require("./app.js");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
