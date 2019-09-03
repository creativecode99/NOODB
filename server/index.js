const express = require("express");
const copyController = require('./controllers/copyController');
const app = express();


app.use(express.json());

app.post("/api/create",copyController.createLetter);
// app.get()

app.delete("/api/delete",copyController.deleteLetter);

const PORT = 5050;

app.listen(PORT, () => console.log( PORT));