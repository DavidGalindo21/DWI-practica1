import app from './app/app.js'
import config from './app/config/configuracion.js'

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});