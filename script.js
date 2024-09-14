// Função para carregar dados do livro
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const livroId = path.split('/').pop();

    if (path.startsWith('/livro/')) {
        fetch(`/livro/${livroId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('livro-titulo').textContent = data.titulo;
                document.getElementById('livro-descricao').textContent = data.descricao;
            })
            .catch(error => {
                console.error('Erro ao carregar livro:', error);
                document.getElementById('livro-titulo').textContent = 'Erro';
                document.getElementById('livro-descricao').textContent = 'Não foi possível carregar as informações do livro.';
            });
    }
});
