const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:XPcEKTG3Ufscfj3U@cluster0.bmwlyah.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
