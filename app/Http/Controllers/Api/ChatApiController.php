<?php

namespace App\Http\Controllers\Api;

use App\Events\NewMessageCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\MarkMessageAsRead;
use App\Http\Requests\StoreMessage;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatApiController extends Controller
{
    protected $message;

    public function __construct(Message $message)
    {
        $this->message = $message;
    }
    //grava uma nova mensagem
    public function store(StoreMessage $request)
    {
        $message = $request->user()
                                ->messages()
                                ->create($request->all());

        event(new NewMessageCreated($message));

        return new MessageResource($message);
    }

    //recupera as mensagens com determinado usuário
    public function messagesWithUser($id)
    {
        $messages = $this->message->conversationsWithUser($id); //o this missage é o objeto la no construtor

        return MessageResource::collection($messages);
    }

    public function markMessagesAsRead(MarkMessageAsRead $request)
    {
        $this->message->markMessagesAsRead($request->sender);

        return response()->json(['message' => 'success']);
    }

    


}
