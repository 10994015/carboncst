<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $articles = Article::where('hidden', false)->orderBy('updated_at', 'desc')->take(5)->get();
        return view('home', ['articles'=>$articles]);
    }
}