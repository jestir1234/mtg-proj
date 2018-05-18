// Test
const someFunction = () => console.log("cat");
const someOtherFunction = () => console.log("poop");
import colors from "colors";
import express from "express";
import { findCard } from "./controllers";

const app = express();

app.get("/notes", (req, res) => {
  res.json({
    notes: "This is your potato. Edit this to start saving your notes!"
  });
});

app.get("/cards", (req, res) => {
  findCard(req, res);
});

console.log("Listening on port".blue, "3000".underline.red);
app.listen(3000);
