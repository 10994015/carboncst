<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewController;
use App\Http\Livewire\AwardProgramComponent;
use App\Http\Livewire\AwardsComponent;
use App\Http\Livewire\ChairmanComponet;
use App\Http\Livewire\ContactComponent;
use App\Http\Livewire\CstDatabaseComponent;
use App\Http\Livewire\CSTgroupComponet;
use App\Http\Livewire\CstSeminarComponent;
use App\Http\Livewire\ForumComponent;
use App\Http\Livewire\HomeComponet;
use App\Http\Livewire\JoinMemberComponent;
use App\Http\Livewire\LearnaboutComponet;
use App\Http\Livewire\LearncharterComponet;
use App\Http\Livewire\LetterComponent;
use App\Http\Livewire\NewsComponet;
use App\Http\Livewire\OrganizationComponet;
use App\Http\Livewire\OverseaComponent;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeComponet::class);
Route::get('/news', NewsComponet::class);
Route::get('/chairman', ChairmanComponet::class);
Route::get('/learnabout', LearnaboutComponet::class);
Route::get('/organization', OrganizationComponet::class);
Route::get('/cst-group', CSTgroupComponet::class);
Route::get('/learnchart', LearncharterComponet::class);
Route::get('/awards', AwardsComponent::class);
Route::get('/awardprogram', AwardProgramComponent::class);
Route::get('/letter', LetterComponent::class);
Route::get('/join-member', JoinMemberComponent::class);
Route::get('/cst-database', CstDatabaseComponent::class);
Route::get('/cst-seminar', CstSeminarComponent::class);
Route::get('/oversea', OverseaComponent::class);
Route::get('/forum', ForumComponent::class);
Route::get('/contact', ContactComponent::class);




Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';