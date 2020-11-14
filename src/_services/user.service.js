import clienteAxios from '../_api/axios';

export const userService = {
    login,
    logout,
    getInfoByDNI,
    getInfo
};

async function login(dni, password) {
    try {
        const data = {
            dni,
            password
        }
        const response = await clienteAxios.post(`/api/login`, data);
        // console.log(response)
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data[0];
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function getInfoByDNI(dni) {
    try {
        const response = await clienteAxios.get(`/api/users/getinfobydni/${dni}`);
        console.log(response)
        if (response.status === 200) {
            return response.data[0];
        }else{
            return response
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

async function getInfo() {
    try {
        const response = await clienteAxios.get(`/api/users`);
        // console.log(response)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error)
        return error
    }
}