export default { //feito tudo em um só arquivo, diferente do users
    state: {
        userConversation: null,
        messages: []
    },

    mutations: {//para alterar os valores
        ADD_USER_CONVERSATION (state, user) {
            state.userConversation = user
        },

        REMOVE_USER_CONVERSATION (state, user) {
            state.userConversation = null
        },

        ADD_MESSAGES (state, messages) {
            state.messages = messages
        },

        ADD_MESSAGE (state, message) {//recebeu uma unica mensagem
            state.messages.push(message)
        },

        CLEAR_MESSAGES (state) {//limpar as mensagens
            state.messages = []
        },
    },
    //state passa acessar, mutation(chamo pelo commit) para alterar,
    actions: {
        getMessagesConversation ({ state, commit, dispatch }) {
            commit('CLEAR_MESSAGES')//limpar antes de chamar as mensagens novamente p evitar problemas

            return axios.get(`/api/v1/messages/${state.userConversation.id}`)
                        .then(response => {
                            commit('ADD_MESSAGES', response.data.data)

                            dispatch('markConversationsAsRead')
                        })
        },

        sendNewMessage ({ state, commit }, message) {
            return axios.post('/api/v1/messages', {
                message,
                receiver_id: state.userConversation.id
            })
            .then(response => {
                commit('ADD_MESSAGE', {//mutation
                    message: message,
                    receiver: {... state.userConversation},
                    me: true
                })
            })
        },

        markConversationsAsRead ({ commit, state }) {
            return axios.patch('/api/v1/messages/mark_as_read', {sender: state.userConversation.id})
                            .then(response => commit('CLEAR_TOTAL_UNREAD_MESSAGES', state.userConversation.id))
        }
    },

    getters: {

    }
}
