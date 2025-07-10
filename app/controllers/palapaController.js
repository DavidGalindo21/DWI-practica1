import { Palapa } from "../models/palapaModel.js";

export const buscarTodo = (req, res) => {
  try {
    Palapa.find({})
      .then((bebidas) => {
        if (bebidas.length === 0) {
          return res
            .status(204)
            .json({ message: "No se encontraron productos" });
        }
        return res.status(200).json(bebidas);
      })
      .catch((error) => {
        return res
          .status(404)
          .json({ message: "Error al solicitar la informacion", error });
      });
  } catch (error) {
    console.error("Error al buscar los productos:", error);
    res.status(500).json({ message: "Error al buscar los productos" });
  }
};

export const agregar = (req, res) => {
  try {
    new Palapa(req.body)
      .save()
      .then((bebida) => {
        return res.status(200).json({
          message: "Producto agregado correctamente",
          bebida,
        });
      })
      .catch((error) => {
        return res
          .status(404)
          .json({ message: "Error al agregar el producto", error });
      });
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    res.status(500).json({ message: "Error al agregar el producto" });
  }
};

export const buscarBebida = (req, res, next) => { // debe llevar una llave y valor
  try {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    console.log(consulta);
    Palapa.find(consulta)
      .then((info) => {
        if (!info.length) return next(); // Indicar que hay una siguiente funcion
        req.body.bebidas = info
        return next(); // Continuar con la siguiente funcion
      })
      .catch((e) => {
        req.body.e = e;
        return next(); // Continuar con la siguiente funcion 

      });
  } catch (error) {
    console.error("Error al buscar la bebida:", error);
    res.status(500).json({ message: "Error al buscar la bebida" });
  }
};

export const mostrarBebida = (req, res) => {
  if(req.body.e) return res.status(404).json({ message: "Error al buscar la bebida", error: req.body.e });
  if(!req.body.bebidas) return res.status(204).json({ message: "No hay información que mostrar" });
  let bebidas = req.body.bebidas;
  return res.status(200).json(bebidas);
}