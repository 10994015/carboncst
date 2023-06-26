<?php

namespace App\Http\Livewire;

use App\Models\Awardprogram;
use Livewire\Component;

class AwardProgramComponent extends Component
{
    public function render()
    {
        $awards = Awardprogram::where('hidden', false)->orderBy('year', 'desc')->get();
        return view('livewire.award-program-component', ['awards'=>$awards]);
    }
}