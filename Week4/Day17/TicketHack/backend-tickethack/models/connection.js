const mongoose = require("mongoose");

const connectionString = "mongodb+srv://ByronMike:Toto_13@cluster0.w6fqpct.mongodb.net/tickethack"

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));