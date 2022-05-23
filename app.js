import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3301;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Play 1.d4!");
});

app.listen(PORT);
console.log(`App started on ${PORT}`);
