<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // 基本驗證規則
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'birthday' => ['nullable', 'date', 'before:today'],
            'is_student' => ['nullable', 'boolean'],
        ];

        // 如果勾選了學生，則學校和學號為必填
        if ($request->has('is_student') && $request->is_student) {
            $rules['school'] = ['required', 'string', 'max:255'];
            $rules['student_id'] = ['required', 'string', 'max:50', 'unique:users,student_id'];
        } else {
            $rules['school'] = ['nullable', 'string', 'max:255'];
            $rules['student_id'] = ['nullable', 'string', 'max:50', 'unique:users,student_id'];
        }

        // 自定義錯誤訊息
        $messages = [
            'name.required' => '姓名為必填欄位',
            'email.required' => '電子郵件為必填欄位',
            'email.email' => '請輸入有效的電子郵件格式',
            'email.unique' => '此電子郵件已被註冊',
            'password.required' => '密碼為必填欄位',
            'password.confirmed' => '密碼確認不一致',
            'birthday.date' => '請輸入有效的日期',
            'birthday.before' => '生日必須是今天之前的日期',
            'school.required' => '學生必須填寫就讀學校',
            'student_id.required' => '學生必須填寫學號',
            'student_id.unique' => '此學號已被註冊',
        ];

        $request->validate($rules, $messages);

        // 建立用戶
        $userData = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthday' => $request->birthday,
            'is_student' => $request->has('is_student') ? true : false,
        ];

        // 如果是學生，添加學校和學號資訊
        if ($userData['is_student']) {
            $userData['school'] = $request->school;
            $userData['student_id'] = $request->student_id;
        }

        $user = User::create($userData);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
