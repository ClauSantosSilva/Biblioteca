const LivroModel = require('../models/livroModel');

// Função para obter um livro específico
exports.getLivro = (req, res) => {
    const livroId = parseInt(req.params.id, 10);
    const livro = LivroModel.findById(livroId);
    
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).send('Livro não encontrado');
    }
};
