const express = require("express");

const app = express();
/*
app.get('/', (req, res) => {
    res.send('Hola Eros');
   });
app.get("/hola", (req, res) => {
  res.send("Hola");
});
app.get("/eros", (req, res) => {
  res.send("Eros");
});
*/

app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});
app.post("/saludar", (req, res) => {
  const { nombre } = req.body;
  res.send(`Hola ${nombre}!`);
});

app.listen(3000, () => {
  console.log("La aplicación está corriendo en http://localhost:3000");
});
