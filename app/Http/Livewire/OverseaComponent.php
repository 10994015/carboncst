<?php

namespace App\Http\Livewire;

use App\Models\Oversea;
use Livewire\Component;

class OverseaComponent extends Component
{
    public $searchText = '';
    public $inputText = '';
    public function searchFn(){
        $this->searchText = $this->inputText;
    }
    public function render()
    {
        $overseas = Oversea::where([['hidden',false], ['title', 'like', "%$this->searchText%"]])->orWhere([['hidden',false], ['content', 'like', "%$this->searchText%"]])->orderBy('updated_at', 'desc')->paginate(8);
        return view('livewire.oversea-component', ['overseas'=>$overseas]);
    }
}