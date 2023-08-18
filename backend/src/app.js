import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ObatRoutes from "./routes/ObatRoutes.js";
import PegawaiRoutes from "./routes/PegawaiRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logRequest = (req, res, next) => {
  console.log("terjadi request ke PATH", req.path);
  next();
};

app.use(logRequest);
app.use(ObatRoutes);
app.use(PegawaiRoutes);
app.use(UserRoutes);

const PORT = 5000;

app.get("/api", (req, res) => {
  res.send("Api is working");
});

const start = async () => {
  try {
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();

// app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
// console.log("");
