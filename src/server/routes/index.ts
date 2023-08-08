import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
    res.status(StatusCodes.ACCEPTED).send({ message: 'get' });
});

router.post('/', (req, res) => {
    res.status(StatusCodes.CREATED).json(req.body + { message: 'post' });
});

router.put('/:id', (req, res) => {
    res.status(StatusCodes.ACCEPTED).send(req.body);
});

router.delete('/:id', (req, res) => {
    res.status(StatusCodes.NO_CONTENT).send({ message: 'delete' });
});

export { router };

