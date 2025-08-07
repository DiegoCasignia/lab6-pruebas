const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (_req, res) => {
    res.send('Integración Continua Funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});