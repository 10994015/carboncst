<?php

namespace App\Http\Livewire;

use App\Models\Letter;
use Livewire\Component;

class LetterComponent extends Component
{
    public function render()
    {
        $letters = Letter::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.letter-component', ['letters'=>$letters]);
    }
}