import clienteAxios from '../_api/axios';

export const inscriptoService = {
    postFormNuevoInscripto
};

async function postFormNuevoInscripto(data) {
    try {
        const response = await clienteAxios.post(`/api/nuevoinscripto`, data);
        console.log({response})
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}