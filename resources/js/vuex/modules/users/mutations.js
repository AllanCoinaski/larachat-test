export default{
    ADD_ALL_USERS(state,users){
        state.users = users; //recebe e seta os usuários la no state.js
    },
    ADD_ONLINE_USERS(state,users){
        state.onlineUsers = users
    },
    ADD_ONLINE_USER(state,user){
        state.onlineUsers.unshift(user) //ao entrar adiciona
    },
    REMOVE_ONLINE_USER (state, user) {
        state.onlineUsers = state.onlineUsers.filter(u => u.email != user.email)//retorna todos menos aquele q é para remover
    },

}

