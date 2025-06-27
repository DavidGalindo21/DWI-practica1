import express from "express";
const router = express.Router();

router.get("/bebidas", (req, res) => {
  res.json({ mensaje: "Hola Mundo" });
});

export default router;