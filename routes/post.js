const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // **Corrección: Añadí la importación del modelo `Post`.**

// Crear un post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error.message }); // **Corrección: Manejo mejorado de errores con `error.message`.**
  }
});

// Mostrar un post por ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error.message }); // **Corrección: Manejo mejorado de errores con `error.message`.**
  }
});

// Borrar un post
router.delete("/:postId", async (req, res) => {
  // **Corrección: Añadí `:postId` como parámetro dinámico.**
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error.message }); // **Corrección: Manejo mejorado de errores con `error.message`.**
  }
});

// Actualizar un post
router.patch("/:postId", async (req, res) => {
  // **Corrección: Arreglé la sintaxis del método `patch`.**
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error.message }); // **Corrección: Manejo mejorado de errores con `error.message`.**
  }
});

module.exports = router;
