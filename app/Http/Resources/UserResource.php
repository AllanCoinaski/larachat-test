<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //retorna exatamente as mesmas colunas...
       // return parent::toArray($request);
     
        //retorna somente o nome e email, aqui posso alterar os nomes e tal...
       return[
           'name' => $this->name,
           'email' => $this->email,
           'photo' => '',
           'online' => false
       ];
    }
}
