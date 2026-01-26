<?php

namespace App\Exports;

use App\Models\User;

/**
 * CSV 匯出類別（最簡單可靠的方案）
 */
class MembersExportCsv
{
    protected $search;
    protected $membershipFilter;

    public function __construct($search = null, $membershipFilter = null)
    {
        $this->search = $search;
        $this->membershipFilter = $membershipFilter;
    }

    /**
     * 取得要導出的數據
     */
    protected function getUsers()
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

        // 依照建立時間降序排列
        $query->orderBy('created_at', 'desc');

        return $query->get();
    }

    /**
     * 取得會員身分標籤
     */
    protected function getMembershipLabel($membershipType, $isAdmin = false)
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
     * 生成 CSV 檔案並下載
     */
    public function download($filename = '會員資料.csv')
    {
        $users = $this->getUsers();

        // 設定 HTTP 標頭
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Cache-Control: max-age=0');
        header('Pragma: public');

        // 開啟輸出流
        $output = fopen('php://output', 'w');

        // 加入 UTF-8 BOM（讓 Excel 正確識別中文）
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

        // 資料行
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
        exit;
    }
}
