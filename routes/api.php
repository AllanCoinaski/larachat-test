<?php

use App\Http\Controllers\Api\ChatApiController;
use App\Http\Controllers\Api\UserApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//arquivo de rotas da API, acesso pelo /api

//utiliza prefixo para boas praticas, acesso por http://127.0.0.1:8000/api/v1/users
Route::prefix('v1')
    ->middleware(['auth:web']) //para poder usar a autenticação, basta alterar o arquivo RouteServiceProvider
    ->group(function(){

        Route::get('/users',[UserApiController::class,'index']);        
        Route::get('/messages/create',[ChatApiController::class,'store']);
    });

Route::get('/',function(){
    return ['message'=>'ok'];
});