<?php

namespace App\Http\Livewire;

use App\Models\CstSeminar;
use Livewire\Component;

class CstSeminarComponent extends Component
{
    public $searchText = '';
    public $inputText = '';
    public function searchFn(){
        $this->searchText = $this->inputText;
    }
    public function render()
    {
        $seminars = CstSeminar::where([['hidden',false], ['title', 'like', "%$this->searchText%"]])->orderBy('updated_at', 'desc')->get();
        return view('livewire.cst-seminar-component', ['seminars'=>$seminars]);
    }
}