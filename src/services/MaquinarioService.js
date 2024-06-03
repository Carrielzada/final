const API_BASE_URL = 'http://localhost:3001'
class MaquinarioService {

    async obterTodos() {
        try {
            const response = await fetch(`${API_BASE_URL}/maquinario`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erro ao listar maquinários');
            }
            const dados = await response.json();
            return dados;
        } catch (error) {
            console.error('Ocorreu um erro ao listar maquinários:', error.message);
            throw error;
        }
    }

    async obterPorId(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/maquinario/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erro ao obter maquinário por ID');
            }
            const dados = await response.json();
            return dados;
        } catch (error) {
            console.error('Ocorreu um erro ao obter o maquinário por ID:', error.message);
            throw error;
        }
    }

    async adicionar(maquinarioDados) {
        try {
            const response = await fetch(`${API_BASE_URL}/maquinario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(maquinarioDados)

            })
            if (!response.ok) {
                console.log('ocorreu um erro ao adicionar')
                throw new Error('Erro ao Cadastrar maquinário!')
            }
        } catch (error) {
            throw error;
        }
    }

    async atualizar(idMaquinario, maquinarioDados) {
        try {
            const response = await fetch(`${API_BASE_URL}/maquinario/${idMaquinario}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(maquinarioDados)

            })
            if (!response.ok) {
                console.log('ocorreu um erro ao atualizar')
                throw new Error('Erro ao Atualizar Maquinario!')
            }
        } catch (error) {
            throw error;
        }
    }

    async delete(idMaquinario) {
        try {
            const response = await fetch(`${API_BASE_URL}/maquinario/${idMaquinario}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                console.log('ocorreu um erro ao deletar');
                throw new Error('Erro ao Deletar maquinário!');
            } else {
                // Exclusão bem-sucedida
                // Você pode retornar a resposta do backend, se necessário
                return response;
            }
        } catch (error) {
            throw error;
        }
    }

    async filtrar(termobusca) {
        const response = await fetch(`${API_BASE_URL}/maquinario/filtrar/${termobusca}`, {

            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            console.log('ocorreu um erro ao listar')
        } else {

            const dados = await response.json();
            return dados;
        }
    }

}

export default MaquinarioService