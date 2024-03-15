const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

const PORT = 3000;
app.use(express.json());

app.use('/users', usersRouter);

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
module.exports = server;