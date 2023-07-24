import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

const PORT = 4000;
// app.get('/api', (req, res) => {
//     res.send("Api is working");})

const start = async () => {
  try {
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
