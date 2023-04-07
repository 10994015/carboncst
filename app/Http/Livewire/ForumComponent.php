<?php

namespace App\Http\Livewire;

use App\Models\Forum;
use Livewire\Component;

class ForumComponent extends Component
{
    public function render()
    {
        $forums = Forum::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.forum-component', ['forums'=>$forums]);
    }
}