<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserApiController extends Controller
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function index(Request $request){
        
        $users = $this->user
        ->inRandomOrder()
        ->where('id','!=', $request->user()->id)->get(); //retorna uma collection
        //utiliza resource por boas praticas
        return UserResource::collection($users);
    }

}
