<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewController;
use App\Http\Controllers\PaymentController;
use App\Http\Livewire\AwardProgramComponent;
use App\Http\Livewire\AwardsComponent;
use App\Http\Livewire\BulletinComponent;
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
use App\Http\Livewire\MemberManagementComponent;
use App\Http\Livewire\NewsComponet;
use App\Http\Livewire\OrganizationComponet;
use App\Http\Livewire\OverseaComponent;
use App\Http\Livewire\PaymentComponent;
use App\Http\Livewire\PaymentHistoryComponent; // 新增
use App\Http\Livewire\ProfileComponent;
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
Route::get('/bulletin', BulletinComponent::class);

Route::middleware(['auth'])->group(function () {
    // 用戶個人資料
    Route::get('/profile', ProfileComponent::class)->name('profile');

    // 付款相關路由
    Route::get('/payment', PaymentComponent::class)->name('payment.form');
    Route::get('/payment/history', PaymentHistoryComponent::class)->name('payment.history'); // 新增

    // 訂單詳情頁面（如果需要單獨的詳情頁面）
    Route::get('/order/{id}', [PaymentController::class, 'orderDetail'])->name('order.detail'); // 新增

    // 綠界表單顯示頁面
    Route::get('/ecpay/form', function () {
        $formHtml = session('ecpay_form');
        if (!$formHtml) {
            return redirect()->route('payment.form')->with('error', '付款表單已過期，請重新操作');
        }
        session()->forget('ecpay_form');
        return view('livewire.payment.form', compact('formHtml'));
    })->name('ecpay.form');

    // 付款成功頁面
    Route::get('/payment/success', [PaymentController::class, 'paymentSuccess'])
        ->name('payment.success');

    // 付款結果頁面
    Route::get('/payment/result', [PaymentController::class, 'paymentResult'])
        ->name('payment.result');

    // 付款失敗頁面 (新增)
    Route::get('/payment/failed', function () {
        return view('livewire.payment.failed', [
            'message' => '付款失敗，請重新嘗試',
            'error' => request()->get('error', '')
        ]);
    })->name('payment.failed');
});

// 綠界金流回調路由（不需要認證，因為是第三方回調）
Route::post('/ecpay/return', [PaymentController::class, 'ecpayReturn'])
    ->name('ecpay.return');

// 綠界客戶端返回路由（用戶付款後回到網站的路由）
Route::get('/ecpay/client-back', function () {
    // 檢查用戶是否已登入
    if (!auth()->check()) {
        return redirect()->route('login')->with('info', '請先登入查看付款結果');
    }

    // 檢查最新訂單狀態
    $latestOrder = auth()->user()->getLatestOrder();

    if ($latestOrder && $latestOrder->isPaid()) {
        return redirect()->route('payment.success');
    } elseif ($latestOrder && $latestOrder->status === 'failed') {
        return redirect()->route('payment.failed')->with('error', '付款失敗');
    } else {
        return redirect()->route('payment.history');
    }
})->name('ecpay.client.back'); // 新增


Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/members', MemberManagementComponent::class)
        ->name('admin.members');
});

require __DIR__ . '/auth.php';
