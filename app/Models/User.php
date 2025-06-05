<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'school',
        'birthday',
        'student_id',
        'membership_type', // guest or student
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'birthday' => 'date',
    ];

    /**
     * 取得用戶年齡
     *
     * @return int|null
     */
    public function getAgeAttribute()
    {
        if ($this->birthday) {
            return $this->birthday->diffInYears(now());
        }
        return null;
    }

    /**
     * 檢查是否為學生
     *
     * @return bool
     */
    public function isStudent()
    {
        return $this->membership_type === 'student';
    }

    /**
     * 取得完整的學生資訊
     *
     * @return string|null
     */
    public function getStudentInfoAttribute()
    {
        if ($this->membership_type === 'student' && $this->school && $this->student_id) {
            return "{$this->school} - {$this->student_id}";
        }
        return null;
    }

    /**
     * Scope: 只取得學生用戶
     */
    public function scopeStudents($query)
    {
        return $query->where('membership_type', 'student');
    }

    /**
     * Scope: 只取得非學生用戶
     */
    public function scopeNonStudents($query)
    {
        return $query->where('membership_type', '!=', 'student');
    }

    /**
     * Scope: 根據學校篩選
     */
    public function scopeFromSchool($query, $school)
    {
        return $query->where('school', $school);
    }



    /**
     * 關聯到訂單
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * 獲取已付款的訂單
     */
    public function paidOrders()
    {
        return $this->hasMany(Order::class)->where('status', 'paid');
    }

    /**
     * 獲取待付款的訂單
     */
    public function pendingOrders()
    {
        return $this->hasMany(Order::class)->where('status', 'pending');
    }

    /**
     * 獲取失敗的訂單
     */
    public function failedOrders()
    {
        return $this->hasMany(Order::class)->where('status', 'failed');
    }

    /**
     * 獲取已取消的訂單
     */
    public function cancelledOrders()
    {
        return $this->hasMany(Order::class)->where('status', 'cancelled');
    }

    /**
     * 檢查是否已完成註冊付款
     */
    public function hasCompletedRegistration()
    {
        return $this->orders()->where('status', 'paid')->exists();
    }

    /**
     * 檢查是否有待付款的訂單
     */
    public function hasPendingOrders()
    {
        return $this->orders()->where('status', 'pending')->exists();
    }

    /**
     * 獲取最新的已付款訂單
     */
    public function getLatestPaidOrder()
    {
        return $this->orders()->where('status', 'paid')->latest()->first();
    }

    /**
     * 獲取最新的訂單（任何狀態）
     */
    public function getLatestOrder()
    {
        return $this->orders()->latest()->first();
    }

    /**
     * 獲取身分別名稱
     */
    public function getUserTypeNameAttribute()
    {
        return $this->isStudent() ? '學生身分' : '一般身分';
    }

    /**
     * 計算總付款金額
     */
    public function getTotalPaidAmountAttribute()
    {
        return $this->orders()->where('status', 'paid')->sum('amount');
    }

    /**
     * 獲取註冊狀態
     */
    public function getRegistrationStatusAttribute()
    {
        if ($this->hasCompletedRegistration()) {
            return '已完成註冊';
        } elseif ($this->hasPendingOrders()) {
            return '待付款';
        } else {
            return '未註冊';
        }
    }

    /**
     * 獲取註冊狀態的顏色標籤
     */
    public function getRegistrationStatusColorAttribute()
    {
        if ($this->hasCompletedRegistration()) {
            return 'green'; // 已完成註冊 - 綠色
        } elseif ($this->hasPendingOrders()) {
            return 'yellow'; // 待付款 - 黃色
        } else {
            return 'gray'; // 未註冊 - 灰色
        }
    }

    /**
     * 檢查用戶是否有包含晚宴的訂單
     */
    public function hasBanquetRegistration()
    {
        return $this->orders()
            ->where('status', 'paid')
            ->where('include_banquet', true)
            ->exists();
    }

    /**
     * 獲取用戶的註冊類型（早鳥或一般）
     */
    public function getRegistrationTypeAttribute()
    {
        $paidOrder = $this->getLatestPaidOrder();
        if ($paidOrder) {
            return $paidOrder->registration_type_name;
        }
        return null;
    }

    /**
     * Scope: 已完成註冊的用戶
     */
    public function scopeRegistered($query)
    {
        return $query->whereHas('orders', function ($q) {
            $q->where('status', 'paid');
        });
    }

    /**
     * Scope: 未完成註冊的用戶
     */
    public function scopeUnregistered($query)
    {
        return $query->whereDoesntHave('orders', function ($q) {
            $q->where('status', 'paid');
        });
    }

    /**
     * Scope: 有待付款訂單的用戶
     */
    public function scopeWithPendingPayments($query)
    {
        return $query->whereHas('orders', function ($q) {
            $q->where('status', 'pending');
        });
    }

    /**
     * Scope: 已註冊晚宴的用戶
     */
    public function scopeWithBanquet($query)
    {
        return $query->whereHas('orders', function ($q) {
            $q->where('status', 'paid')
                ->where('include_banquet', true);
        });
    }

    /**
     * 檢查學生身分驗證狀態
     */
    public function isStudentVerified()
    {
        return $this->membership_type === 'student' && !empty($this->school) && !empty($this->student_id);
    }

    /**
     * 獲取用戶的付款統計資訊
     */
    public function getPaymentStatistics()
    {
        return [
            'total_orders' => $this->orders()->count(),
            'paid_orders' => $this->paidOrders()->count(),
            'pending_orders' => $this->pendingOrders()->count(),
            'failed_orders' => $this->failedOrders()->count(),
            'total_amount' => $this->total_paid_amount,
            'has_banquet' => $this->hasBanquetRegistration(),
            'registration_status' => $this->registration_status,
        ];
    }

    public function getMembershipLabel()
    {
        if ($this->is_admin) {
            return '管理員';
        }
        switch ($this->membership_type) {
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
}
