<?php

namespace App\Http\Livewire;

use App\Models\Chairman;
use Livewire\Component;

class ChairmanComponet extends Component
{
    public function render()
    {
<<<<<<< HEAD
        $chairmans = Chairman::where('hidden', false)->orderBy('updated_at', 'DESC')->get();
        return view('livewire.chairman-componet', ['chairmans'=>$chairmans])->layout('layouts.base');;
=======
        $chairmans = Chairman::where('hidden', false)->orderBy('created_at', 'DESC')->get();
        return view('livewire.chairman-componet', ['chairmans'=>$chairmans]);
>>>>>>> 9f8955028c5ef34599344afc4dc932bb130106cd
    }
}