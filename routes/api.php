<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['auth:sanctum', 'admin'])->group(function(){
    Route::get('/user', [AuthController::class, 'getUser']);
    //Article
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('articles', ArticleController::class);
    Route::post('/isExistArticle', [ArticleController::class, 'isExistArticle']);
    Route::post('/articleItems', [ArticleController::class, 'deleteItems']);

    Route::apiResource('banners', BannerController::class);
    Route::post('/isExistBanner', [BannerController::class, 'isExistBanner']);
    Route::post('/bannerItems', [BannerController::class, 'deleteItems']);
    
 

});

Route::post('/login', [AuthController::class, 'login']);