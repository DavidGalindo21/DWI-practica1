import express from "express";
import { buscarTodo, agregar, buscarBebida, mostrarBebida } from "../controllers/palapaController.js";
const router = express.Router();

router.get("/bebidas", buscarTodo);
router.post("/bebidas", agregar);
router.get("/bebidas/:key/:value", buscarBebida, mostrarBebida);

export default router;