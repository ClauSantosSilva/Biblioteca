// Modelo de livros simulando um banco de dados
const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis', descricao: 'Uma épica jornada em um mundo de fantasia.' },
    { id: 2, titulo: 'Harry Potter', descricao: 'A magia e aventuras de um jovem bruxo.' }
];

// Função para encontrar um livro por ID
exports.findById = (id) => {
    return livros.find(livro => livro.id === id);
};
