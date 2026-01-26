<?php

namespace App\Exports;

use App\Models\User;

/**
 * 原生 Excel 匯出類別（不依賴 Laravel Excel）
 * 使用純 PHP 生成 Excel XML 格式
 */
class MembersExportNative
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
     * 生成 Excel 檔案並下載
     */
    public function download($filename = '會員資料.xlsx')
    {
        $users = $this->getUsers();

        // 設定 HTTP 標頭
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Cache-Control: max-age=0');

        // 生成 Excel XML 內容
        $this->generateExcel($users);
        exit;
    }

    /**
     * 生成 Excel XML 格式
     */
    protected function generateExcel($users)
    {
        // Excel XML 標頭
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        echo '<?mso-application progid="Excel.Sheet"?>' . "\n";
        echo '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"';
        echo ' xmlns:o="urn:schemas-microsoft-com:office:office"';
        echo ' xmlns:x="urn:schemas-microsoft-com:office:excel"';
        echo ' xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"';
        echo ' xmlns:html="http://www.w3.org/TR/REC-html40">' . "\n";

        // 定義樣式
        $this->generateStyles();

        // 工作表
        echo '<Worksheet ss:Name="會員資料">' . "\n";
        echo '<Table>' . "\n";

        // 設定欄寬
        echo '<Column ss:Width="50"/>' . "\n";  // 編號
        echo '<Column ss:Width="120"/>' . "\n"; // 姓名
        echo '<Column ss:Width="200"/>' . "\n"; // 電子郵件
        echo '<Column ss:Width="100"/>' . "\n"; // 生日
        echo '<Column ss:Width="100"/>' . "\n"; // 會員身分
        echo '<Column ss:Width="150"/>' . "\n"; // 就讀學校
        echo '<Column ss:Width="100"/>' . "\n"; // 學號
        echo '<Column ss:Width="150"/>' . "\n"; // 註冊時間

        // 表頭
        echo '<Row ss:StyleID="header">' . "\n";
        echo '<Cell><Data ss:Type="String">編號</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">姓名</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">電子郵件</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">生日</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">會員身分</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">就讀學校</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">學號</Data></Cell>' . "\n";
        echo '<Cell><Data ss:Type="String">註冊時間</Data></Cell>' . "\n";
        echo '</Row>' . "\n";

        // 資料行
        foreach ($users as $user) {
            echo '<Row>' . "\n";
            echo '<Cell><Data ss:Type="Number">' . $user->id . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $this->escapeXml($user->name) . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $this->escapeXml($user->email) . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . ($user->birthday ? $user->birthday->format('Y-m-d') : '') . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $this->escapeXml($this->getMembershipLabel($user->membership_type, $user->is_admin)) . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $this->escapeXml($user->school ?? '') . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $this->escapeXml($user->student_id ?? '') . '</Data></Cell>' . "\n";
            echo '<Cell><Data ss:Type="String">' . $user->created_at->format('Y-m-d H:i:s') . '</Data></Cell>' . "\n";
            echo '</Row>' . "\n";
        }

        echo '</Table>' . "\n";
        echo '</Worksheet>' . "\n";
        echo '</Workbook>';
    }

    /**
     * 定義樣式
     */
    protected function generateStyles()
    {
        echo '<Styles>' . "\n";

        // 表頭樣式
        echo '<Style ss:ID="header">' . "\n";
        echo '    <Font ss:Bold="1" ss:Size="12" ss:Color="#FFFFFF"/>' . "\n";
        echo '    <Interior ss:Color="#2d2d2d" ss:Pattern="Solid"/>' . "\n";
        echo '    <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>' . "\n";
        echo '    <Borders>' . "\n";
        echo '        <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>' . "\n";
        echo '        <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>' . "\n";
        echo '        <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>' . "\n";
        echo '        <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>' . "\n";
        echo '    </Borders>' . "\n";
        echo '</Style>' . "\n";

        echo '</Styles>' . "\n";
    }

    /**
     * 轉義 XML 特殊字元
     */
    protected function escapeXml($string)
    {
        return htmlspecialchars($string, ENT_XML1 | ENT_QUOTES, 'UTF-8');
    }
}
