<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat.{receiverId}', function ($user, $receiverId) {
    return (int) $user->id === (int) $receiverId;//verifica o receiver id é igual ao user que esta logado 
});

Broadcast::channel('chatroom', function ($user) {//isso deveria parar aquele erro de autenticação o console
    return $user;
});

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

