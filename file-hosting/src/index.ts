import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello");
});
app.use(express.static("public"));

app.listen(5001, () => {
  console.log("File hosting server listening on port 5001.");
});
