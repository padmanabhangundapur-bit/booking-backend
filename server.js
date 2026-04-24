const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const settingRoutes = require("./routes/settingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://padmanabhangundapur:4SO22CS103@cluster0-shard-00-00.m8uwk.mongodb.net:27017,cluster0-shard-00-01.m8uwk.mongodb.net:27017,cluster0-shard-00-02.m8uwk.mongodb.net:27017/?ssl=true&replicaSet=atlas-113t0u-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
  console.log("MongoDB Atlas Connected ✅");
})
.catch(err => {
  console.log("MongoDB Connection Error ❌");
  console.log(err);
});

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/settings", settingRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});