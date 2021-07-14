import Vue from 'vue'
import store from './vuex/store'

const userId = window.Laravel.user
//pega o id do template
window.Echo.channel(`tenchat_database_private-chat.${userId}`)
.listen('NewMessageCreated',(e)=>{
    let conversation = e.message
    //console.log(e.message) //pega o message la do NewMessageCreated
    

    //verificar se estou conversando com usuario
    if(store.state.chat.userConversation == null || store.state.chat.userConversation.id != conversation.sender.id 
        ){
            Vue.$vToastify.success(`
            Mensagem: ${message.conversation}
            `,`${conversation.sender.name} te enviou uma nova mensagem`)
        }else {
            conversation.me = false;
            store.state.chat.messages.push(conversation)
        }
//marca como mensagem n lida
store.commit('UPDATE_TOTAL_UNREAD_MESSAGES',conversation.sender.id)
})

window.Echo.join('tenchat_database_chatroom')//quando alguem entra neste canal
.here(users => {
    console.log('Usuários Online:')
    console.log(users)

    store.commit('ADD_ONLINE_USERS', users)
})
.joining(user => {//acabou de entrar em outra sessão
    console.log('Entrou:')
    console.log(user)

    store.commit('ADD_ONLINE_USER', user)
})
.leaving(user => {
    console.log('Saiu:')
    console.log(user)

    store.commit('REMOVE_ONLINE_USER', user)
})
