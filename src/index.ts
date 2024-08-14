import express from "express";
import cors from "cors";
import { getAnimals } from "./controllers/animals.js";

const PORT = process.env.PORT || 8080;

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json()); // json body parser

app.get("/", (req, res) => {
  res.json("Welcome to Starboy Farms Inc.");
});
app.get("/animals", (req, res) => {
  getAnimals(req, res);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/animals/`)
);

// Query example... http://localhost:8080/animals/?q=horse

// npm run build ; node .
