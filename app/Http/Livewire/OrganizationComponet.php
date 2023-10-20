<?php

namespace App\Http\Livewire;

use App\Models\Organization;
use Illuminate\Support\Facades\Log;
use Livewire\Component;

class OrganizationComponet extends Component
{
    public function render()
    {
        $organiztions = Organization::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.organization-componet', ['organiztions'=>$organiztions]);
    }
}