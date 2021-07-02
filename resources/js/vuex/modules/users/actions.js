export default{//ira comunicar com a api e pegar os dados para mandar para os mutations para enviar para o state
    getUsers({commit}){//commit é para acessar o mutation
       return axios.get('/api/v1/users') //se der certo cai no then
        .then(response => commit('ADD_ALL_USERS',response.data) );//envia para as mutations
    }
}