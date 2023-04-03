<?php

namespace App\Http\Livewire;

use App\Models\Article;
use App\Models\Banner;
use Livewire\Component;

class HomeComponet extends Component
{
    public function render()
    {
        $articles = Article::where('hidden', false)->orderBy('updated_at', 'desc')->take(5)->get();
        $banners = Banner::where('hidden', false)->orderBy('updated_at', 'desc')->get();
        return view('livewire.home-componet', ['articles'=>$articles, 'banners'=>$banners]);
    }
}