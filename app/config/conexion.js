import mongoose from "mongoose";
import configuracion from "./configuracion.js";

const conexion = {
  conection: null,
  connect: async function () {
    if (this.conection) return this.conection;
    try {
      const conn = await mongoose.connect(configuracion.DB);
      this.conection = conn;
      console.log("Conexión a la base de datos establecida");
      return conn;
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
    }
  },
};

export default conexion;