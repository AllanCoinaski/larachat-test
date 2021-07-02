import store from './vuex/store';

window.Echo.join('tenchat_database_chatroom')
//window.Echo.channel(`larachat_database_private-chat.${userId}`)
.here(users => {
    console.log('Usuários Online:')
    console.log(users)
    store.commit('ADD_ONLINE_USERS', users) //chama o mutation
})
.joining(user => {
    console.log('Entrou:')
    console.log(user)
    store.commit('ADD_ONLINE_USER', user)
})
.leaving(user => {
    console.log('Saiu:')
    console.log(user)
    store.commit('REMOVE_ONLINE_USER', user)
})