<?php

namespace App\Http\Livewire;

use App\Models\Forum;
use Livewire\Component;

class ForumComponent extends Component
{
    public $image = '';
    public $images = [];
    public $openArr = [0];
    public function openImgModel($id){
        $oversea = Forum::find($id);
        $this->image = $oversea->image ?? '/images/news.jpg';
        $this->images = $oversea->images===NULL ? [] : explode(',', $oversea->images);
        array_unshift($this->images, $this->image);

        $this->dispatchBrowserEvent('openImgModel');

    }
    public function toggleImage($img){
        $this->image = $img;
        $this->dispatchBrowserEvent('successToggle');
    }
    public function openArrFn($idx){
        if(in_array ($idx, $this->openArr)){
            $index = array_search($idx, $this->openArr);
            unset($this->openArr[$index]);
        }else{
            array_push($this->openArr, $idx);
        }
    }
    public function render()
    {
        $forums = Forum::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.forum-component', ['forums'=>$forums]);
    }
}