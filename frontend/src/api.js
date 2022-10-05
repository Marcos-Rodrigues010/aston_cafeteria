const BASE_URL = 'http://localhost:8080';

const apiFetchGet = async (endpoint) => {
    try{
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        const json = await response.json();
        return json;
    } catch(e){
        return e;
    }
}

const apiFetchPost = async (endpoint, data) => {

    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try{
        const response = await fetch(`${BASE_URL}/${endpoint}`, payload);
        const json = await response.json();
        return json;
    } catch(error){
        console.error(error);
    }
}

const apiFetchDelete = async (endpoint, data = {}) => {

    const payload = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try{
        const response = await fetch(`${BASE_URL}/${endpoint}`, payload);
        const json = await response.json();
        return json;
    } catch(error){
        console.error(error);
    }
}

export const api = {
    signup: async (data) => {
       return await apiFetchPost('client/signup', data);
    },
    findAllProducts: async () => {
        return await apiFetchGet('product/findAll');
    },
    signin: async (data) => {
        return await apiFetchPost('client/signin', data)
    },
    findProduct: async (idProduct) => {
        return await apiFetchGet(`product/findById/${idProduct}`)
    },
    findClientById: async (idClient) => {
        return await apiFetchGet(`client/findById/${idClient}`);
    },
    saveOrder: async (data) => {
        return await apiFetchPost('order/save', data);
    },
    findOrdersByIdClient: async (idClient) => {
        return await apiFetchGet(`order/findOrdersByIdClient/${idClient}`);
    },
    addFavorite: async (idClient, idProduct) => {
        return await apiFetchGet(`client/addFavorite/${idClient}/${idProduct}`);
    },
    getFavoritesByUserId: async idClient => {
        return await apiFetchGet(`client/getFavoritesByUserId/${idClient}`);
    },
    removeFavorite: async (idClient, idProduct) => {
        return await apiFetchDelete(`client/removeFavorite/${idClient}/${idProduct}`);
    },
    addToCart: async (idClient, idProduct) => {
        return await apiFetchGet(`client/addToCart/${idClient}/${idProduct}`);
    },
    getCartByUserId: async idClient => {
        return await apiFetchGet(`client/getCartByUserId/${idClient}`);
    },
    removeFromCart: async (idClient, idProduct) => {
        return await apiFetchDelete(`client/removeFromCart/${idClient}/${idProduct}`);
    }
};