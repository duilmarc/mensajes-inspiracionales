const express = require('express');
const server = express();

const {PORT} = require('./config/index.js');
// ROUTES
const { HomeRoutes, QuoteRoutes} = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');

// Implementacion del middleware para manejo de los archivos publicos
server.use(express.static('./public'));
// Transformar peticiones post a formato json
server.use(express.json());

server.use('/quotes',QuoteRoutes);
server.use('/', HomeRoutes);

server.use(NotFoundMiddleware);

// ESCUCHA DEL SERVIDOR
server.listen(PORT, () => {
    console.log( ` Application running on PORT ${PORT}` );
});