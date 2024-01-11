require("dotenv").config();
const http = require("http");
const app = require("./app");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
mongoose.connection.once("open", () => {
  console.log("MongoDb connected");
});
mongoose.connection.once("error", (err) => {
  console.error(err);
});
async function startServer() {
  await mongoose.connect(process.env.MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
