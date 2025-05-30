<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class ProfileComponent extends Component
{
    // 用戶基本資料
    public $name;
    public $email;
    public $birthday;
    public $is_student;
    public $school;
    public $student_id;

    // 密碼更改
    public $current_password;
    public $new_password;
    public $new_password_confirmation;

    // 控制狀態
    public $isEditing = false;
    public $showPasswordForm = false;
    public $successMessage = '';
    public $errorMessage = '';

    public function mount()
    {
        $user = Auth::user();
        $this->name = $user->name;
        $this->email = $user->email;
        $this->birthday = $user->birthday ? $user->birthday->format('Y-m-d') : '';
        $this->is_student = $user->is_student;
        $this->school = $user->school;
        $this->student_id = $user->student_id;
    }

    public function rules()
    {
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . Auth::id(),
            'birthday' => 'nullable|date|before:today',
            'is_student' => 'boolean',
        ];

        // 如果是學生，學校和學號為必填
        if ($this->is_student) {
            $rules['school'] = 'required|string|max:255';
            $rules['student_id'] = 'required|string|max:50|unique:users,student_id,' . Auth::id();
        } else {
            $rules['school'] = 'nullable|string|max:255';
            $rules['student_id'] = 'nullable|string|max:50|unique:users,student_id,' . Auth::id();
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'name.required' => '姓名為必填欄位',
            'email.required' => '電子郵件為必填欄位',
            'email.email' => '請輸入有效的電子郵件格式',
            'email.unique' => '此電子郵件已被使用',
            'birthday.date' => '請輸入有效的日期',
            'birthday.before' => '生日必須是今天之前的日期',
            'school.required' => '學生必須填寫就讀學校',
            'student_id.required' => '學生必須填寫學號',
            'student_id.unique' => '此學號已被使用',
        ];
    }

    public function toggleEdit()
    {
        if ($this->isEditing) {
            // 取消編輯時重新載入原始資料
            $this->mount();
        }

        $this->isEditing = !$this->isEditing;
        $this->resetMessages();
    }

    public function updateProfile()
    {
        $this->validate();

        try {
            $user = Auth::user();

            $updateData = [
                'name' => $this->name,
                'email' => $this->email,
                'birthday' => $this->birthday ?: null,
                'is_student' => $this->is_student,
            ];

            // 處理學生資料
            if ($this->is_student) {
                $updateData['school'] = $this->school;
                $updateData['student_id'] = $this->student_id;
            } else {
                $updateData['school'] = null;
                $updateData['student_id'] = null;
            }

            $user->update($updateData);

            $this->isEditing = false;
            $this->successMessage = '個人資料已成功更新！';
            $this->emit('profileUpdated');
        } catch (\Exception $e) {
            $this->errorMessage = '更新失敗，請稍後再試。';
        }
    }

    public function togglePasswordForm()
    {
        $this->showPasswordForm = !$this->showPasswordForm;
        $this->resetPasswordFields();
        $this->resetMessages();
    }

    public function updatePassword()
    {
        $this->validate([
            'current_password' => 'required',
            'new_password' => ['required', 'confirmed', Password::defaults()],
        ], [
            'current_password.required' => '請輸入目前密碼',
            'new_password.required' => '請輸入新密碼',
            'new_password.confirmed' => '新密碼確認不一致',
        ]);

        if (!Hash::check($this->current_password, Auth::user()->password)) {
            $this->addError('current_password', '目前密碼不正確');
            return;
        }

        try {
            Auth::user()->update([
                'password' => Hash::make($this->new_password)
            ]);

            $this->showPasswordForm = false;
            $this->resetPasswordFields();
            $this->successMessage = '密碼已成功更新！';
        } catch (\Exception $e) {
            $this->errorMessage = '密碼更新失敗，請稍後再試。';
        }
    }

    public function updatedIsStudent()
    {
        if (!$this->is_student) {
            $this->school = '';
            $this->student_id = '';
        }
    }

    private function resetPasswordFields()
    {
        $this->current_password = '';
        $this->new_password = '';
        $this->new_password_confirmation = '';
    }

    private function resetMessages()
    {
        $this->successMessage = '';
        $this->errorMessage = '';
        $this->resetErrorBag();
    }
    public function render()
    {
        return view('livewire.profile-component');
    }
}
