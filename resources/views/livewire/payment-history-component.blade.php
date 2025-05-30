<div class="p-6 mx-auto max-w-7xl">
    <!-- 頁面標題 -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">付款記錄</h1>
        <p class="mt-2 text-gray-600">管理您的所有註冊付款記錄</p>
    </div>

    <!-- 成功/錯誤訊息 -->
    @if (session()->has('success'))
        <div class="p-4 mb-6 text-green-700 bg-green-100 border border-green-400 rounded-lg">
            {{ session('success') }}
        </div>
    @endif

    @if (session()->has('error'))
        <div class="p-4 mb-6 text-red-700 bg-red-100 border border-red-400 rounded-lg">
            {{ session('error') }}
        </div>
    @endif

    @if (session()->has('info'))
        <div class="p-4 mb-6 text-blue-700 bg-blue-100 border border-blue-400 rounded-lg">
            {{ session('info') }}
        </div>
    @endif

    <!-- 統計卡片 -->
    <div class="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-5">
        <div class="p-6 bg-white rounded-lg shadow">
            <div class="flex items-center">
                <div class="p-2 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">總訂單</p>
                    <p class="text-2xl font-semibold text-gray-900">{{ $statistics['total'] }}</p>
                </div>
            </div>
        </div>

        <div class="p-6 bg-white rounded-lg shadow">
            <div class="flex items-center">
                <div class="p-2 bg-green-100 rounded-lg">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">已付款</p>
                    <p class="text-2xl font-semibold text-green-600">{{ $statistics['paid'] }}</p>
                </div>
            </div>
        </div>

        <div class="p-6 bg-white rounded-lg shadow">
            <div class="flex items-center">
                <div class="p-2 bg-yellow-100 rounded-lg">
                    <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">待付款</p>
                    <p class="text-2xl font-semibold text-yellow-600">{{ $statistics['pending'] }}</p>
                </div>
            </div>
        </div>

        <div class="p-6 bg-white rounded-lg shadow">
            <div class="flex items-center">
                <div class="p-2 bg-red-100 rounded-lg">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">失敗</p>
                    <p class="text-2xl font-semibold text-red-600">{{ $statistics['failed'] }}</p>
                </div>
            </div>
        </div>

        <div class="p-6 bg-white rounded-lg shadow">
            <div class="flex items-center">
                <div class="p-2 bg-purple-100 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">總金額</p>
                    <p class="text-lg font-semibold text-purple-600">NT$ {{ number_format($statistics['total_amount']) }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 篩選和搜尋 -->
    <div class="mb-6 bg-white rounded-lg shadow">
        <div class="p-6">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <!-- 搜尋框 -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">搜尋訂單</label>
                    <input type="text"
                           wire:model.debounce.300ms="search"
                           placeholder="輸入訂單編號或方案名稱..."
                           class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                </div>

                <!-- 狀態篩選 -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">付款狀態</label>
                    <select wire:model="statusFilter"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option value="">全部狀態</option>
                        <option value="paid">已付款</option>
                        <option value="pending">待付款</option>
                        <option value="failed">付款失敗</option>
                        <option value="cancelled">已取消</option>
                    </select>
                </div>

                <!-- 快速動作 -->
                <div class="flex items-end">
                    <a href="{{ route('payment.form') }}"
                       class="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-lg hover:bg-red-700">
                        新增註冊
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- 訂單列表 -->
    <div class="overflow-hidden bg-white rounded-lg shadow">
        @if($orders->isEmpty())
            <!-- 空狀態 -->
            <div class="p-12 text-center">
                <div class="w-24 h-24 mx-auto mb-4 text-gray-300">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9 9V5H11V9H9ZM9 13V11H11V13H9Z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="mb-2 text-lg font-medium text-gray-900">
                    @if($search || $statusFilter)
                        找不到符合條件的訂單
                    @else
                        尚無付款記錄
                    @endif
                </h3>
                <p class="mb-6 text-gray-500">
                    @if($search || $statusFilter)
                        請嘗試調整搜尋條件
                    @else
                        您還沒有任何註冊付款記錄
                    @endif
                </p>
                @if(!$search && !$statusFilter)
                    <a href="{{ route('payment.form') }}"
                       class="inline-flex items-center px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-lg hover:bg-red-700">
                        立即註冊繳費
                    </a>
                @endif
            </div>
        @else
            <!-- 訂單表格 -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left">
                                <button wire:click="sortBy('merchant_trade_no')"
                                        class="flex items-center text-xs font-medium tracking-wider text-gray-500 uppercase hover:text-gray-700">
                                    訂單編號
                                    @if($sortBy === 'merchant_trade_no')
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            @if($sortDirection === 'asc')
                                                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                            @else
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            @endif
                                        </svg>
                                    @endif
                                </button>
                            </th>
                            <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">註冊類型</th>
                            <th class="px-6 py-3 text-left">
                                <button wire:click="sortBy('amount')"
                                        class="flex items-center text-xs font-medium tracking-wider text-gray-500 uppercase hover:text-gray-700">
                                    金額
                                    @if($sortBy === 'amount')
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            @if($sortDirection === 'asc')
                                                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                            @else
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            @endif
                                        </svg>
                                    @endif
                                </button>
                            </th>
                            <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">狀態</th>
                            <th class="px-6 py-3 text-left">
                                <button wire:click="sortBy('created_at')"
                                        class="flex items-center text-xs font-medium tracking-wider text-gray-500 uppercase hover:text-gray-700">
                                    建立時間
                                    @if($sortBy === 'created_at')
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            @if($sortDirection === 'asc')
                                                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                            @else
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            @endif
                                        </svg>
                                    @endif
                                </button>
                            </th>
                            <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">操作</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @foreach($orders as $order)
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900">{{ $order->merchant_trade_no }}</div>
                                    @if($order->ecpay_trade_no)
                                        <div class="text-xs text-gray-500">綠界: {{ $order->ecpay_trade_no }}</div>
                                    @endif
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">{{ $order->registration_type_name }}</div>
                                    @if($order->include_banquet)
                                        <div class="flex items-center mt-1 text-xs text-green-600">
                                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            含大會晚宴
                                        </div>
                                    @endif
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-semibold text-gray-900">NT$ {{ number_format($order->amount) }}</div>
                                    @if($order->banquet_fee > 0)
                                        <div class="text-xs text-gray-500">晚宴: NT$ {{ number_format($order->banquet_fee) }}</div>
                                    @endif
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    @switch($order->status)
                                        @case('paid')
                                            <span class="inline-flex px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                                                {{ $order->status_name }}
                                            </span>
                                            @break
                                        @case('pending')
                                            <span class="inline-flex px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                                                {{ $order->status_name }}
                                            </span>
                                            @break
                                        @case('failed')
                                            <span class="inline-flex px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
                                                {{ $order->status_name }}
                                            </span>
                                            @break
                                        @case('cancelled')
                                            <span class="inline-flex px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">
                                                {{ $order->status_name }}
                                            </span>
                                            @break
                                        @default
                                            <span class="inline-flex px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">
                                                {{ $order->status_name }}
                                            </span>
                                    @endswitch
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    <div>{{ $order->created_at->format('Y/m/d H:i') }}</div>
                                    @if($order->payment_date)
                                        <div class="text-xs text-green-600">付款: {{ $order->payment_date->format('Y/m/d H:i') }}</div>
                                    @endif
                                </td>
                                <td class="px-6 py-4 space-x-2 text-sm font-medium whitespace-nowrap">
                                    <button wire:click="showDetail({{ $order->id }})"
                                            class="text-blue-600 transition duration-150 ease-in-out hover:text-blue-900">
                                        詳情
                                    </button>

                                    @if($order->status === 'failed')
                                        <button wire:click="retryPayment({{ $order->id }})"
                                                class="text-green-600 transition duration-150 ease-in-out hover:text-green-900">
                                            重試
                                        </button>
                                    @endif

                                    @if($order->status === 'pending')
                                        <button wire:click="cancelOrder({{ $order->id }})"
                                                onclick="return confirm('確定要取消此訂單嗎？')"
                                                class="text-red-600 transition duration-150 ease-in-out hover:text-red-900">
                                            取消
                                        </button>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <!-- 分頁 -->
            <div class="px-6 py-4 border-t border-gray-200">
                {{ $orders->links() }}
            </div>
        @endif
    </div>

    <!-- 訂單詳情 Modal -->
    @if($showOrderDetail && $selectedOrder)
        <div class="fixed inset-0 z-50 overflow-y-auto" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="flex items-center justify-center min-h-screen px-4">
                <div class="w-full max-w-2xl max-h-screen overflow-y-auto bg-white rounded-lg shadow-xl">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">訂單詳情</h3>
                        <button wire:click="closeDetail"
                                class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="px-6 py-4 space-y-6">
                        <!-- 基本資訊 -->
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">基本資訊</h4>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span class="text-gray-500">訂單編號:</span>
                                    <span class="font-medium">{{ $selectedOrder->merchant_trade_no }}</span>
                                </div>
                                @if($selectedOrder->ecpay_trade_no)
                                <div>
                                    <span class="text-gray-500">綠界編號:</span>
                                    <span class="font-medium">{{ $selectedOrder->ecpay_trade_no }}</span>
                                </div>
                                @endif
                                <div>
                                    <span class="text-gray-500">狀態:</span>
                                    <span class="font-medium">{{ $selectedOrder->status_name }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-500">付款方式:</span>
                                    <span class="font-medium">{{ $selectedOrder->payment_method_name }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-500">建立時間:</span>
                                    <span class="font-medium">{{ $selectedOrder->created_at->format('Y/m/d H:i:s') }}</span>
                                </div>
                                @if($selectedOrder->payment_date)
                                <div>
                                    <span class="text-gray-500">付款時間:</span>
                                    <span class="font-medium">{{ $selectedOrder->payment_date->format('Y/m/d H:i:s') }}</span>
                                </div>
                                @endif
                            </div>
                        </div>

                        <!-- 註冊資訊 -->
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">註冊資訊</h4>
                            <div class="p-4 rounded-lg bg-gray-50">
                                <div class="space-y-2">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">註冊類型:</span>
                                        <span class="font-medium">{{ $selectedOrder->registration_type_name }}</span>
                                    </div>
                                    @if(isset($selectedOrder->order_details['plan_name']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">方案名稱:</span>
                                        <span class="font-medium">{{ $selectedOrder->order_details['plan_name'] }}</span>
                                    </div>
                                    @endif
                                    @if($selectedOrder->include_banquet)
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">大會晚宴:</span>
                                        <span class="font-medium text-green-600">已包含 (NT$ {{ number_format($selectedOrder->banquet_fee) }})</span>
                                    </div>
                                    @endif
                                    @if(isset($selectedOrder->order_details['user_type']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">身分別:</span>
                                        <span class="font-medium">{{ $selectedOrder->order_details['user_type'] === 'student' ? '學生身分' : '一般身分' }}</span>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <!-- 費用明細 -->
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">費用明細</h4>
                            <div class="p-4 rounded-lg bg-gray-50">
                                <div class="space-y-2">
                                    @if(isset($selectedOrder->order_details['base_amount']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">基本註冊費:</span>
                                        <span class="font-medium">NT$ {{ number_format($selectedOrder->order_details['base_amount']) }}</span>
                                    </div>
                                    @endif
                                    @if($selectedOrder->banquet_fee > 0)
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">大會晚宴費:</span>
                                        <span class="font-medium">NT$ {{ number_format($selectedOrder->banquet_fee) }}</span>
                                    </div>
                                    @endif
                                    <hr class="my-2">
                                    <div class="flex justify-between text-lg font-bold">
                                        <span class="text-gray-900">總計:</span>
                                        <span class="text-red-600">NT$ {{ number_format($selectedOrder->amount) }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 付款資訊 (僅已付款訂單顯示) -->
                        @if($selectedOrder->status === 'paid' && $selectedOrder->ecpay_response)
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">付款資訊</h4>
                            <div class="p-4 rounded-lg bg-green-50">
                                <div class="space-y-2 text-sm">
                                    @if(isset($selectedOrder->ecpay_response['payment_type']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">付款方式:</span>
                                        <span class="font-medium">{{ $selectedOrder->ecpay_response['payment_type'] }}</span>
                                    </div>
                                    @endif
                                    @if(isset($selectedOrder->ecpay_response['payment_date']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">付款時間:</span>
                                        <span class="font-medium">{{ $selectedOrder->ecpay_response['payment_date'] }}</span>
                                    </div>
                                    @endif
                                    @if(isset($selectedOrder->ecpay_response['payment_type_charge_fee']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">手續費:</span>
                                        <span class="font-medium">NT$ {{ $selectedOrder->ecpay_response['payment_type_charge_fee'] }}</span>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        @endif

                        <!-- 錯誤資訊 (僅失敗訂單顯示) -->
                        @if($selectedOrder->status === 'failed' && $selectedOrder->ecpay_response)
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">錯誤資訊</h4>
                            <div class="p-4 rounded-lg bg-red-50">
                                <div class="space-y-2 text-sm">
                                    @if(isset($selectedOrder->ecpay_response['error_message']))
                                    <div>
                                        <span class="text-gray-600">錯誤訊息:</span>
                                        <p class="mt-1 font-medium text-red-600">{{ $selectedOrder->ecpay_response['error_message'] }}</p>
                                    </div>
                                    @endif
                                    @if(isset($selectedOrder->ecpay_response['return_code']))
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">錯誤代碼:</span>
                                        <span class="font-medium">{{ $selectedOrder->ecpay_response['return_code'] }}</span>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        @endif

                        <!-- 備註 -->
                        @if($selectedOrder->notes)
                        <div>
                            <h4 class="mb-3 text-sm font-medium text-gray-900">備註</h4>
                            <div class="p-4 rounded-lg bg-gray-50">
                                <p class="text-sm text-gray-700">{{ $selectedOrder->notes }}</p>
                            </div>
                        </div>
                        @endif
                    </div>

                    <!-- Modal Footer -->
                    <div class="flex justify-between px-6 py-4 border-t border-gray-200">
                        <div class="flex space-x-3">
                            @if($selectedOrder->status === 'failed')
                                <button wire:click="retryPayment({{ $selectedOrder->id }})"
                                        class="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-green-600 rounded-lg hover:bg-green-700">
                                    重新付款
                                </button>
                            @endif

                            @if($selectedOrder->status === 'pending')
                                <button wire:click="cancelOrder({{ $selectedOrder->id }})"
                                        onclick="return confirm('確定要取消此訂單嗎？')"
                                        class="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-lg hover:bg-red-700">
                                    取消訂單
                                </button>
                            @endif
                        </div>

                        <button wire:click="closeDetail"
                                class="px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400">
                            關閉
                        </button>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <!-- Loading 狀態 -->
    <div wire:loading.delay class="fixed inset-0 z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, 0.5);">
        <div class="flex items-center p-6 space-x-3 bg-white rounded-lg">
            <svg class="w-6 h-6 text-red-600 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-medium text-gray-700">處理中...</span>
        </div>
    </div>
</div>
