const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('¡Hola desde la app.');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});