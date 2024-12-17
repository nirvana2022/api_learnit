const express = require("express");
const mongoose = require("mongoose"); // Declaración única de mongoose.
const bodyParser = require("body-parser");

const app = express();
const PORT = 10000;
const DB = "mongodb://localhost:27017/prueba";

// Middleware
app.use(bodyParser.json());

// Rutas
const postRoute = require("./routes/post");
app.use("/servicios", postRoute);

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // No se utiliza callback aquí.
    console.log("Conectado a la base de datos satisfactoriamente.");
  } catch (err) {
    console.error("Error de conexión a la base de datos:", err);
  }
};

connectDB(); // Llama a la función para conectar.

// Servidor
app.get("/", (req, res) => {
  res.send("Servidor ejecutándose...");
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
