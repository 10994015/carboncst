<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AwardprogramController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ChairmanController;
use App\Http\Controllers\CstDatabaseController;
use App\Http\Controllers\CstSeminarController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\LetterController;
use App\Http\Controllers\OverseaController;
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

    Route::apiResource('chairmans', ChairmanController::class);
    Route::post('/isExistChairman', [ChairmanController::class, 'isExistChairman']);
    Route::post('/chairmanItems', [ChairmanController::class, 'deleteItems']);

    Route::apiResource('awardprograms', AwardprogramController::class);
    Route::post('/isExistAwardprogram', [AwardprogramController::class, 'isExistAwardprogram']);
    Route::post('/awardprogramItems', [AwardprogramController::class, 'deleteItems']);

    Route::apiResource('letters', LetterController::class);
    Route::post('/isExistLetter', [LetterController::class, 'isExistLetter']);
    Route::post('/letterItems', [LetterController::class, 'deleteItems']);

    Route::apiResource('cstDatabases', CstDatabaseController::class);
    Route::post('/isExistCstDatabase', [CstDatabaseController::class, 'isExistCstDatabase']);
    Route::post('/cstdatabaseItems', [CstDatabaseController::class, 'deleteItems']);

    Route::apiResource('cstSeminars', CstSeminarController::class);
    Route::post('/isExistCstSeminar', [CstSeminarController::class, 'isExistCstSeminar']);
    Route::post('/cstseminarItems', [CstSeminarController::class, 'deleteItems']);

    Route::apiResource('overseas', OverseaController::class);
    Route::post('/isExistOversea', [OverseaController::class, 'isExistOversea']);
    Route::post('/overseaItems', [OverseaController::class, 'deleteItems']);

    Route::apiResource('forums', ForumController::class);
    Route::post('/isExistForum', [ForumController::class, 'isExistForum']);
    Route::post('/forumItems', [ForumController::class, 'deleteItems']);
});

Route::post('/login', [AuthController::class, 'login']);