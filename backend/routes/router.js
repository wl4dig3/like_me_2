import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Home');
});

router.get('*', (req, res) => {
    res.send('404, no encontrado');
});

export default router;