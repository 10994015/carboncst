<?php

namespace App\Http\Livewire;

use App\Models\Article;
use Livewire\Component;

class NewsComponet extends Component
{
    public $searchText = '';
    public $inputText = '';
    public function searchFn(){
        $this->searchText = $this->inputText;
    }
    public function render()
    {
        $articles = Article::where([['hidden',false], ['title', 'like', "%$this->searchText%"]])->orWhere([['hidden',false], ['content', 'like', "%$this->searchText%"]])->orderBy('updated_at', 'desc')->paginate(8);
        return view('livewire.news-componet', ['articles'=>$articles]);
    }
}