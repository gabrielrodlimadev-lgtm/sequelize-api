const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes.js')
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send({ status: 'ok' })
});

app.use('/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log(`API servida em: http://localhost:${port}`)
});