<?php

namespace App\Http\Livewire;

use Livewire\Component;

class AwardsComponent extends Component
{
    public function render()
    {
        return view('livewire.awards-component')->layout('layouts.base');;
    }
}