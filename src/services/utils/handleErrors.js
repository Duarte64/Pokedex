// eslint-disable-next-line import/no-anonymous-default-export
export default function(status) {
    if (status === 400) {
        throw new Error('Status 400 - Requisição com problemas!');
    } else if (status === 404) {
        throw new Error('Status 404 - Nenhum resultado encontrado!');
    } else if (status > 500) {
        throw new Error('Status 500 - Erro no servidor da API!');
    }
}