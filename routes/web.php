<?php

use App\Http\Controllers\{
    ChatController
};
use App\Http\Controllers\Api\ChatApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;

Route::get('/chat', [ChatController::class, 'index'])
        ->name('chat')
        ->middleware('auth');

Route::redirect('/', '/chat')->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::post('/teste',function(){
    return 'teste ok';
})->middleware('auth.basic');;

Route::post('/messagesv2', [ChatApiController::class, 'store'])->middleware('auth.basic');