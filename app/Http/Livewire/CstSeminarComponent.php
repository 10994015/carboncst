<?php

namespace App\Http\Livewire;

use App\Models\CstSeminar;
use Illuminate\Support\Facades\Log;
use Livewire\Component;

class CstSeminarComponent extends Component
{
    public $searchText = '';
    public $inputText = '';
    public $image = '';
    public $images = [];
    public function searchFn(){
        $this->searchText = $this->inputText;
    }
    public function openImgModel($id){
        $seminar = CstSeminar::find($id);
        $this->image = $seminar->image ?? '/images/news.jpg';
        $this->images = $seminar->images===NULL ? [] : explode(',', $seminar->images);
        array_unshift($this->images, $this->image);

        $this->dispatchBrowserEvent('openImgModel');

    }
    public function toggleImage($img){
        Log::info($img);
        $this->image = $img;
        $this->dispatchBrowserEvent('successToggle');
    }
    public function render()
    {
        $seminars = CstSeminar::where([['hidden',false], ['title', 'like', "%$this->searchText%"]])->orderBy('updated_at', 'desc')->get();
        return view('livewire.cst-seminar-component', ['seminars'=>$seminars]);
    }
}