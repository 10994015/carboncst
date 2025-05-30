<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'merchant_trade_no',
        'ecpay_trade_no',
        'status',
        'amount',
        'order_details',
        'registration_type',
        'include_banquet',
        'banquet_fee',
        'payment_method',
        'payment_date',
        'ecpay_response',
        'notes',
    ];

    protected $casts = [
        'order_details' => 'array',
        'ecpay_response' => 'array',
        'amount' => 'decimal:2',
        'banquet_fee' => 'decimal:2',
        'include_banquet' => 'boolean',
        'payment_date' => 'datetime',
    ];

    /**
     * 關聯到用戶
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * 獲取狀態的中文名稱
     */
    public function getStatusNameAttribute(): string
    {
        switch ($this->status) {
            case 'pending':
                return '待付款';
            case 'paid':
                return '已付款';
            case 'failed':
                return '付款失敗';
            case 'cancelled':
                return '已取消';
            default:
                return '未知狀態';
        }
    }

    /**
     * 獲取註冊類型的中文名稱
     */
    public function getRegistrationTypeNameAttribute(): string
    {
        switch ($this->registration_type) {
            case 'early_bird':
                return '早鳥優惠';
            case 'regular':
                return '一般註冊';
            default:
                return '未知類型';
        }
    }

    /**
     * 獲取付款方式的中文名稱
     */
    public function getPaymentMethodNameAttribute(): string
    {
        switch ($this->payment_method) {
            case 'credit_card':
                return '信用卡';
            case 'atm':
                return 'ATM轉帳';
            case 'cvs':
                return '超商代碼';
            default:
                return '未知方式';
        }
    }

    /**
     * 檢查是否為已付款狀態
     */
    public function isPaid(): bool
    {
        return $this->status === 'paid';
    }

    /**
     * 檢查是否為待付款狀態
     */
    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    /**
     * 標記為已付款
     */
    public function markAsPaid(array $ecpayResponse = []): void
    {
        $this->update([
            'status' => 'paid',
            'payment_date' => now(),
            'ecpay_response' => $ecpayResponse,
        ]);
    }

    /**
     * 標記為付款失敗
     */
    public function markAsFailed(array $ecpayResponse = []): void
    {
        $this->update([
            'status' => 'failed',
            'ecpay_response' => $ecpayResponse,
        ]);
    }
}
