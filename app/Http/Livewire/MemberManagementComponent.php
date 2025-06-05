<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;
use Illuminate\Support\Facades\Hash;

class MemberManagementComponent extends Component
{
    use WithPagination;

    // 搜尋和篩選
    public $search = '';
    public $membershipFilter = '';
    public $sortField = 'created_at';
    public $sortDirection = 'desc';
    public $perPage = 15;

    // 編輯模式
    public $editingUserId = null;
    public $editForm = [
        'name' => '',
        'email' => '',
        'birthday' => '',
        'membership_type' => 'guest',
        'is_admin' => false,
        'school' => '',
        'student_id' => '',
    ];

    // 新增會員模式
    public $showCreateForm = false;
    public $createForm = [
        'name' => '',
        'email' => '',
        'password' => '',
        'birthday' => '',
        'membership_type' => 'guest',
        'is_admin' => false,
        'school' => '',
        'student_id' => '',
    ];

    // 訊息
    public $successMessage = '';
    public $errorMessage = '';

    protected $paginationTheme = 'bootstrap';

    public function rules()
    {
        $rules = [
            'editForm.name' => 'required|string|max:255',
            'editForm.email' => 'required|email|max:255|unique:users,email,' . ($this->editingUserId ?: 'NULL'),
            'editForm.birthday' => 'nullable|date|before:today',
            'editForm.membership_type' => 'required|in:guest,regular,premium,student',
        ];

        // 如果是學生，學校和學號為必填
        if ($this->editForm['membership_type'] === 'student') {
            $rules['editForm.school'] = 'required|string|max:255';
            $rules['editForm.student_id'] = 'required|string|max:50|unique:users,student_id,' . ($this->editingUserId ?: 'NULL');
        }

        return $rules;
    }

    public function createRules()
    {
        $rules = [
            'createForm.name' => 'required|string|max:255',
            'createForm.email' => 'required|email|max:255|unique:users,email',
            'createForm.password' => 'required|string|min:8',
            'createForm.birthday' => 'nullable|date|before:today',
            'createForm.membership_type' => 'required|in:guest,regular,premium,student',
        ];

        // 如果是學生，學校和學號為必填
        if ($this->createForm['membership_type'] === 'student') {
            $rules['createForm.school'] = 'required|string|max:255';
            $rules['createForm.student_id'] = 'required|string|max:50|unique:users,student_id';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            '*.name.required' => '姓名為必填欄位',
            '*.email.required' => '電子郵件為必填欄位',
            '*.email.email' => '請輸入有效的電子郵件格式',
            '*.email.unique' => '此電子郵件已被使用',
            '*.password.required' => '密碼為必填欄位',
            '*.password.min' => '密碼至少需要8個字元',
            '*.birthday.date' => '請輸入有效的日期',
            '*.birthday.before' => '生日必須是今天之前的日期',
            '*.membership_type.required' => '請選擇會員身分',
            '*.school.required' => '學生必須填寫就讀學校',
            '*.student_id.required' => '學生必須填寫學號',
            '*.student_id.unique' => '此學號已被使用',
        ];
    }

    public function getMembershipLabel($membershipType, $isAdmin = false)
    {
        if ($isAdmin) {
            return '管理員';
        }

        switch ($membershipType) {
            case 'student':
                return '學生會員';
            case 'regular':
                return '一般會員';
            case 'premium':
                return '永久會員';
            case 'guest':
            default:
                return '訪客';
        }
    }

    public function updatedSearch()
    {
        $this->resetPage();
    }

    public function updatedMembershipFilter()
    {
        $this->resetPage();
    }

    public function sortBy($field)
    {
        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
        $this->resetPage();
    }

    public function editUser($userId)
    {
        $user = User::findOrFail($userId);
        $this->editingUserId = $userId;
        $this->editForm = [
            'name' => $user->name,
            'email' => $user->email,
            'birthday' => $user->birthday ? $user->birthday->format('Y-m-d') : '',
            'membership_type' => $user->membership_type ?? 'guest',
            'school' => $user->school ?? '',
            'student_id' => $user->student_id ?? '',
        ];
        $this->resetMessages();
    }

    public function updateUser()
    {
        $this->validate($this->rules());

        try {
            $user = User::findOrFail($this->editingUserId);

            $updateData = [
                'name' => $this->editForm['name'],
                'email' => $this->editForm['email'],
                'birthday' => $this->editForm['birthday'] ?: null,
                'membership_type' => $this->editForm['membership_type'],
                // 不允許修改 is_admin
            ];

            // 處理學生資料
            if ($this->editForm['membership_type'] === 'student') {
                $updateData['school'] = $this->editForm['school'];
                $updateData['student_id'] = $this->editForm['student_id'];
            } else {
                $updateData['school'] = null;
                $updateData['student_id'] = null;
            }

            $user->update($updateData);

            $this->editingUserId = null;
            $this->successMessage = '會員資料已成功更新！';
        } catch (\Exception $e) {
            $this->errorMessage = '更新失敗，請稍後再試。';
        }
    }

    public function cancelEdit()
    {
        $this->editingUserId = null;
        $this->editForm = [
            'name' => '',
            'email' => '',
            'birthday' => '',
            'membership_type' => 'guest',
            'is_admin' => false,
            'school' => '',
            'student_id' => '',
        ];
        $this->resetMessages();
    }

    public function showCreateForm()
    {
        $this->showCreateForm = true;
        $this->createForm = [
            'name' => '',
            'email' => '',
            'password' => '',
            'birthday' => '',
            'membership_type' => 'guest',
            'is_admin' => false,
            'school' => '',
            'student_id' => '',
        ];
        $this->resetMessages();
    }

    public function createUser()
    {
        $this->validate($this->createRules());

        try {
            $createData = [
                'name' => $this->createForm['name'],
                'email' => $this->createForm['email'],
                'password' => Hash::make($this->createForm['password']),
                'birthday' => $this->createForm['birthday'] ?: null,
                'membership_type' => $this->createForm['membership_type'],
                'is_admin' => false, // 強制設為非管理員
            ];

            // 處理學生資料
            if ($this->createForm['membership_type'] === 'student') {
                $createData['school'] = $this->createForm['school'];
                $createData['student_id'] = $this->createForm['student_id'];
            }

            User::create($createData);

            $this->showCreateForm = false;
            $this->successMessage = '新會員已成功建立！';
        } catch (\Exception $e) {
            $this->errorMessage = '建立失敗，請稍後再試。';
        }
    }

    public function cancelCreate()
    {
        $this->showCreateForm = false;
        $this->resetMessages();
    }

    public function deleteUser($userId)
    {
        try {
            User::findOrFail($userId)->delete();
            $this->successMessage = '會員已成功刪除！';
        } catch (\Exception $e) {
            $this->errorMessage = '刪除失敗，請稍後再試。';
        }
    }

    public function updatedEditFormMembershipType()
    {
        if ($this->editForm['membership_type'] !== 'student') {
            $this->editForm['school'] = '';
            $this->editForm['student_id'] = '';
        }
    }

    public function updatedCreateFormMembershipType()
    {
        if ($this->createForm['membership_type'] !== 'student') {
            $this->createForm['school'] = '';
            $this->createForm['student_id'] = '';
        }
    }

    private function resetMessages()
    {
        $this->successMessage = '';
        $this->errorMessage = '';
        $this->resetErrorBag();
    }

    public function render()
    {
        $query = User::query();

        // 排除管理員帳號
        $query->where('is_admin', false);

        // 搜尋
        if ($this->search) {
            $query->where(function ($q) {
                $q->where('name', 'like', '%' . $this->search . '%')
                    ->orWhere('email', 'like', '%' . $this->search . '%')
                    ->orWhere('school', 'like', '%' . $this->search . '%')
                    ->orWhere('student_id', 'like', '%' . $this->search . '%');
            });
        }

        // 會員身分篩選
        if ($this->membershipFilter) {
            $query->where('membership_type', $this->membershipFilter);
        }

        // 排序
        $query->orderBy($this->sortField, $this->sortDirection);

        $users = $query->paginate($this->perPage);

        return view('livewire.member-management-component', [
            'users' => $users
        ]);
    }
}
