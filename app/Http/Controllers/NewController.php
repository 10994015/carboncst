<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class NewController extends Controller
{
    public function index(){
        $articles = Article::where('hidden', false)->orderBy('updated_at', 'desc')->take(5)->paginate(8);
        return view('news', ['articles'=>$articles]);
    }
    public function getNews(){
        $articles = Article::where(['hidden'=>false, ]);

        return response()->json($articles);
    }
}