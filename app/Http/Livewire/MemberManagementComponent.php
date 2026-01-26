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

    /**
     * 匯出會員資料為 CSV（使用 Response 方式）
     */
    public function exportToCsv()
    {
        try {
            $fileName = '會員資料_' . now()->format('Y-m-d_His') . '.csv';

            // 取得資料
            $users = $this->getExportUsers();

            // 使用 response()->streamDownload
            return response()->streamDownload(function () use ($users) {
                $output = fopen('php://output', 'w');

                // UTF-8 BOM
                fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

                // 表頭
                fputcsv($output, [
                    '編號',
                    '姓名',
                    '電子郵件',
                    '生日',
                    '會員身分',
                    '就讀學校',
                    '學號',
                    '註冊時間'
                ]);

                // 資料
                foreach ($users as $user) {
                    fputcsv($output, [
                        $user->id,
                        $user->name,
                        $user->email,
                        $user->birthday ? $user->birthday->format('Y-m-d') : '',
                        $this->getMembershipLabel($user->membership_type, $user->is_admin),
                        $user->school ?? '',
                        $user->student_id ?? '',
                        $user->created_at->format('Y-m-d H:i:s')
                    ]);
                }

                fclose($output);
            }, $fileName, [
                'Content-Type' => 'text/csv; charset=utf-8',
            ]);
        } catch (\Exception $e) {
            $this->errorMessage = '匯出失敗：' . $e->getMessage();
        }
    }

    /**
     * 匯出會員資料為 Excel XML
     */
    public function exportToExcel()
    {
        try {
            $fileName = '會員資料_' . now()->format('Y-m-d_His') . '.xls';

            // 取得資料
            $users = $this->getExportUsers();

            // 使用 response()->streamDownload
            return response()->streamDownload(function () use ($users) {
                echo $this->generateExcelXml($users);
            }, $fileName, [
                'Content-Type' => 'application/vnd.ms-excel',
            ]);
        } catch (\Exception $e) {
            $this->errorMessage = '匯出失敗：' . $e->getMessage();
        }
    }

    /**
     * 取得要匯出的使用者資料
     */
    protected function getExportUsers()
    {
        $query = User::query();
        $query->where('is_admin', false);

        if ($this->search) {
            $query->where(function ($q) {
                $q->where('name', 'like', '%' . $this->search . '%')
                    ->orWhere('email', 'like', '%' . $this->search . '%')
                    ->orWhere('school', 'like', '%' . $this->search . '%')
                    ->orWhere('student_id', 'like', '%' . $this->search . '%');
            });
        }

        if ($this->membershipFilter) {
            $query->where('membership_type', $this->membershipFilter);
        }

        $query->orderBy('created_at', 'desc');

        return $query->get();
    }

    /**
     * 生成 Excel XML
     */
    protected function generateExcelXml($users)
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<?mso-application progid="Excel.Sheet"?>' . "\n";
        $xml .= '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"';
        $xml .= ' xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">' . "\n";

        // 樣式
        $xml .= '<Styles>' . "\n";
        $xml .= '<Style ss:ID="header">' . "\n";
        $xml .= '<Font ss:Bold="1" ss:Size="12" ss:Color="#FFFFFF"/>' . "\n";
        $xml .= '<Interior ss:Color="#2d2d2d" ss:Pattern="Solid"/>' . "\n";
        $xml .= '<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>' . "\n";
        $xml .= '</Style>' . "\n";
        $xml .= '</Styles>' . "\n";

        // 工作表
        $xml .= '<Worksheet ss:Name="會員資料">' . "\n";
        $xml .= '<Table>' . "\n";

        // 欄寬
        $xml .= '<Column ss:Width="50"/><Column ss:Width="120"/><Column ss:Width="200"/>';
        $xml .= '<Column ss:Width="100"/><Column ss:Width="100"/><Column ss:Width="150"/>';
        $xml .= '<Column ss:Width="100"/><Column ss:Width="150"/>' . "\n";

        // 表頭
        $xml .= '<Row ss:StyleID="header">' . "\n";
        $headers = ['編號', '姓名', '電子郵件', '生日', '會員身分', '就讀學校', '學號', '註冊時間'];
        foreach ($headers as $header) {
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($header, ENT_XML1) . '</Data></Cell>';
        }
        $xml .= '</Row>' . "\n";

        // 資料
        foreach ($users as $user) {
            $xml .= '<Row>';
            $xml .= '<Cell><Data ss:Type="Number">' . $user->id . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($user->name, ENT_XML1) . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($user->email, ENT_XML1) . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . ($user->birthday ? $user->birthday->format('Y-m-d') : '') . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($this->getMembershipLabel($user->membership_type, $user->is_admin), ENT_XML1) . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($user->school ?? '', ENT_XML1) . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . htmlspecialchars($user->student_id ?? '', ENT_XML1) . '</Data></Cell>';
            $xml .= '<Cell><Data ss:Type="String">' . $user->created_at->format('Y-m-d H:i:s') . '</Data></Cell>';
            $xml .= '</Row>' . "\n";
        }

        $xml .= '</Table></Worksheet></Workbook>';

        return $xml;
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
            ];

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
                'is_admin' => false,
            ];

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

        $query->where('is_admin', false);

        if ($this->search) {
            $query->where(function ($q) {
                $q->where('name', 'like', '%' . $this->search . '%')
                    ->orWhere('email', 'like', '%' . $this->search . '%')
                    ->orWhere('school', 'like', '%' . $this->search . '%')
                    ->orWhere('student_id', 'like', '%' . $this->search . '%');
            });
        }

        if ($this->membershipFilter) {
            $query->where('membership_type', $this->membershipFilter);
        }

        $query->orderBy($this->sortField, $this->sortDirection);

        $users = $query->paginate($this->perPage);

        return view('livewire.member-management-component', [
            'users' => $users
        ]);
    }
}
