<?php

namespace App\Http\Livewire;

use App\Models\Chairman;
use Livewire\Component;

class ChairmanComponet extends Component
{
    public function render()
    {
        $chairmans = Chairman::where('hidden', false)->orderBy('updated_at', 'DESC')->get();
        return view('livewire.chairman-componet', ['chairmans'=>$chairmans]);
    }
}