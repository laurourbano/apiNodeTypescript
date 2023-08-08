import express from 'express';

const server = express();

server.get('/', (_, res) => {
    res.status(200).send({ message: "mensagem do usuário" });
});

export { server };

