<?php

namespace App\Http\Livewire;

use App\Models\Organization;
use Illuminate\Support\Facades\Log;
use Livewire\Component;

class OrganizationComponet extends Component
{
    public function render()
    {
        $organiztion = Organization::where('hidden', false)->orderBy('updated_at', 'desc')->first();
        return view('livewire.organization-componet', ['organiztion'=>$organiztion]);
    }
}