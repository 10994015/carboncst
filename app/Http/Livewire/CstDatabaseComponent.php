<?php

namespace App\Http\Livewire;

use App\Models\CstDatabase;
use Livewire\Component;

class CstDatabaseComponent extends Component
{
    public function render()
    {
        $databases = CstDatabase::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.cst-database-component', ['databases'=>$databases]);
    }
}