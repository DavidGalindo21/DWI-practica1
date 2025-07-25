import app from "./app/app.js";
import conexion from "./app/config/conexion.js";
import config from "./app/config/configuracion.js";

conexion.connect();

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});