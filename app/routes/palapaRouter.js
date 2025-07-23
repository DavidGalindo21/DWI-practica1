import express from "express";
import { buscarTodo, agregar, buscarBebida, mostrarBebida,eliminarBebida, actualizarBebida } from "../controllers/palapaController.js";
const router = express.Router();

router.get("/bebidas", buscarTodo);
router.post("/bebidas", agregar);
router.get("/bebidas/:key/:value", buscarBebida, mostrarBebida);
router.delete("/bebidas/:key/:value",buscarBebida,eliminarBebida)
router.put("/bebidas/:key/:value",buscarBebida,actualizarBebida)

export default router;