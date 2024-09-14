const express = require('express');
const path = require('path');
const router = express.Router();
const livroController = require('../controllers/livroController');

// Rota para a página inicial
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota para servir a página livro.html
router.get('/livro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/livro.html'));
});

// Rota para obter um livro específico
router.get('/livro/:id', livroController.getLivro);

module.exports = router;
