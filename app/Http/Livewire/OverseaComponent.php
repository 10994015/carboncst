<?php

namespace App\Http\Livewire;

use App\Models\Oversea;
use Livewire\Component;

class OverseaComponent extends Component
{
    public $searchText = '';
    public $inputText = '';
    public $image = '';
    public $images = [];
    public function searchFn(){
        $this->searchText = $this->inputText;
    }
    public function openImgModel($id){
        $oversea = Oversea::find($id);
        $this->image = $oversea->image ?? '/images/news.jpg';
        $this->images = $oversea->images===NULL ? [] : explode(',', $oversea->images);
        array_unshift($this->images, $this->image);

        $this->dispatchBrowserEvent('openImgModel');

    }
    public function toggleImage($img){
        $this->image = $img;
        $this->dispatchBrowserEvent('successToggle');
    }
    public function render()
    {
        $overseas = Oversea::where([['hidden',false], ['title', 'like', "%$this->searchText%"]])->orWhere([['hidden',false], ['content', 'like', "%$this->searchText%"]])->orderBy('updated_at', 'desc')->paginate(8);
        return view('livewire.oversea-component', ['overseas'=>$overseas]);
    }
}