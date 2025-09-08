<div class="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-md">
    <h2 class="mb-8 text-3xl font-bold text-center text-red-600">註冊繳費</h2>
    <p class="mb-8 text-lg text-center text-gray-600">註冊費用列表</p>

    <!-- 錯誤訊息 -->
    @if (session()->has('error'))
        <div class="px-4 py-3 mb-6 text-red-700 bg-red-100 border border-red-400 rounded">
            {{ session('error') }}
        </div>
    @endif

    <!-- 身分別顯示 -->
    <div class="p-4 mb-6 rounded-lg bg-blue-50">
        <h3 class="text-lg font-semibold text-blue-800">
            當前身分：{{ $this->getUserTypeLabel() }} ({{ $this->getMembershipLabel() }})
        </h3>
        @if($userType === 'student')
            <p class="text-sm text-blue-600">學生身分的大會晚宴需額外付費 NT$ 1,200</p>
        @endif
    </div>

    <!-- 費用表格 -->
    <div class="mb-8 overflow-x-auto">
        <table class="w-full bg-white border border-collapse border-gray-300">
            <thead>
                <tr class="bg-yellow-100">
                    <th class="px-4 py-3 font-semibold text-center border border-gray-300">身分別</th>
                    <th class="px-4 py-3 font-semibold text-center border border-gray-300">
                        早鳥 Early-Bird 優惠註冊費<br>
                        <span class="text-sm font-normal">(10月31日前完成繳費者)</span>
                    </th>
                    <th class="px-4 py-3 font-semibold text-center border border-gray-300">
                        非早鳥網路及現場報名<br>
                        <span class="text-sm font-normal">Regular & On-site 註冊費</span>
                    </th>
                    <th class="px-4 py-3 font-semibold text-center border border-gray-300">
                        大會晚宴<br>
                        <span class="text-sm font-normal">Banquet</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-4 py-6 font-semibold text-center border border-gray-300 bg-yellow-50">
                        一般身分<br>
                        <span class="text-sm font-normal">General Participant</span>
                    </td>
                    <td class="px-4 py-4 text-center border border-gray-300">
                        <div class="space-y-1">
                            <div>新台幣 {{ number_format($plans['general']['early_bird']['prices']['guest']) }} 元 (訪客)</div>
                            <div class="text-sm">新台幣 {{ number_format($plans['general']['early_bird']['prices']['regular']) }} 元 (一般會員)</div>
                            <div class="text-sm">新台幣 {{ number_format($plans['general']['early_bird']['prices']['premium']) }} 元 (永久會員)</div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-center border border-gray-300">
                        <div class="space-y-1">
                            <div>新台幣 {{ number_format($plans['general']['regular']['prices']['guest']) }} 元 (訪客)</div>
                            <div class="text-sm">新台幣 {{ number_format($plans['general']['regular']['prices']['regular']) }} 元 (一般會員)</div>
                            <div class="text-sm">新台幣 {{ number_format($plans['general']['regular']['prices']['premium']) }} 元 (永久會員)</div>
                        </div>
                    </td>
                    <td class="px-4 py-4 font-semibold text-center border border-gray-300">
                        註冊費已包含大會晚宴<br>
                        <span class="text-sm font-normal">Included</span>
                    </td>
                </tr>
                <tr>
                    <td class="px-4 py-6 font-semibold text-center border border-gray-300 bg-yellow-50">
                        學生身分<br>
                        <span class="text-sm font-normal">Student</span>
                    </td>
                    <td class="px-4 py-4 text-center border border-gray-300">
                        新台幣 {{ number_format($plans['student']['early_bird']['price']) }} 元
                    </td>
                    <td class="px-4 py-4 text-center border border-gray-300">
                        新台幣 {{ number_format($plans['student']['regular']['price']) }} 元
                    </td>
                    <td class="px-4 py-4 text-center border border-gray-300">
                        新台幣 {{ number_format($plans['student']['early_bird']['banquet_price']) }} 元
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 方案選擇區域 -->
    <div class="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
        <!-- 早鳥方案 -->
        @if($isEarlyBird)
        <div class="border rounded-lg p-6 cursor-pointer transition-all duration-200
                    {{ $selectedPlan === 'early_bird' ? 'border-red-500 bg-red-50 ring-2 ring-red-200' : 'border-gray-300 hover:border-gray-400' }}"
             wire:click="selectPlan('early_bird')">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">早鳥優惠方案</h3>
                    <p class="text-sm text-gray-600">10月31日前完成繳費</p>
                    @if(!$isEarlyBird)
                        <p class="text-xs text-red-500">早鳥期間已結束</p>
                    @endif
                </div>
                <input type="radio"
                       class="w-5 h-5 text-red-600"
                       {{ $selectedPlan === 'early_bird' ? 'checked' : '' }}
                       readonly>
            </div>

            @if($userType === 'student')
                <div class="mb-2 text-2xl font-bold text-red-600">
                    NT$ {{ number_format($plans['student']['early_bird']['price']) }}
                </div>
            @else
                <div class="mb-2 text-2xl font-bold text-red-600">
                    NT$ {{ number_format($plans['general']['early_bird']['prices'][$membershipType]) }}
                </div>
                <div class="text-sm text-gray-600">
                    <div class="{{ $membershipType === 'guest' ? 'font-bold text-red-600' : '' }}">
                        訪客：NT$ {{ number_format($plans['general']['early_bird']['prices']['guest']) }}
                    </div>
                    <div class="{{ $membershipType === 'regular' ? 'font-bold text-red-600' : '' }}">
                        一般會員：NT$ {{ number_format($plans['general']['early_bird']['prices']['regular']) }}
                    </div>
                    <div class="{{ $membershipType === 'premium' ? 'font-bold text-red-600' : '' }}">
                        永久會員：NT$ {{ number_format($plans['general']['early_bird']['prices']['premium']) }}
                    </div>
                </div>
            @endif
        </div>
        @endif

        <!-- 一般方案 -->
        <div class="border rounded-lg p-6 cursor-pointer transition-all duration-200
                    {{ $selectedPlan === 'regular' ? 'border-red-500 bg-red-50 ring-2 ring-red-200' : 'border-gray-300 hover:border-gray-400' }}"
             wire:click="selectPlan('regular')">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">一般註冊方案</h3>
                    <p class="text-sm text-gray-600">網路及現場報名</p>
                </div>
                <input type="radio"
                       class="w-5 h-5 text-red-600"
                       {{ $selectedPlan === 'regular' ? 'checked' : '' }}
                       readonly>
            </div>

            @if($userType === 'student')
                <div class="mb-2 text-2xl font-bold text-red-600">
                    NT$ {{ number_format($plans['student']['regular']['price']) }}
                </div>
            @else
                <div class="mb-2 text-2xl font-bold text-red-600">
                    NT$ {{ number_format($plans['general']['regular']['prices'][$membershipType]) }}
                </div>
                <div class="text-sm text-gray-600">
                    <div class="{{ $membershipType === 'guest' ? 'font-bold text-red-600' : '' }}">
                        訪客：NT$ {{ number_format($plans['general']['regular']['prices']['guest']) }}
                    </div>
                    <div class="{{ $membershipType === 'regular' ? 'font-bold text-red-600' : '' }}">
                        一般會員：NT$ {{ number_format($plans['general']['regular']['prices']['regular']) }}
                    </div>
                    <div class="{{ $membershipType === 'premium' ? 'font-bold text-red-600' : '' }}">
                        永久會員：NT$ {{ number_format($plans['general']['regular']['prices']['premium']) }}
                    </div>
                </div>
            @endif
        </div>
    </div>

    <!-- 學生身分的大會晚宴選項 -->
    @if($userType === 'student')
    <div class="mb-8 p-6 border rounded-lg {{ $includeBanquet ? 'border-red-500 bg-red-50' : 'border-gray-300' }}">
        <div class="flex items-center justify-between">
            <div>
                <h4 class="text-lg font-bold text-gray-800">大會晚宴加購</h4>
                <p class="text-sm text-gray-600">學生身分需額外付費參加晚宴</p>
            </div>
            <div class="flex items-center">
                <span class="mr-4 text-xl font-bold text-red-600">
                    NT$ {{ number_format($plans['student'][$selectedPlan]['banquet_price']) }}
                </span>
                <label class="flex items-center cursor-pointer">
                    <input type="checkbox"
                           wire:model="includeBanquet"
                           class="w-5 h-5 text-red-600 rounded focus:ring-red-500">
                    <span class="ml-2 text-sm">{{ $includeBanquet ? '已選擇' : '加購晚宴' }}</span>
                </label>
            </div>
        </div>
    </div>
    @endif

    <!-- 費用摘要 -->
    <div class="p-6 mb-8 border rounded-lg bg-gray-50">
        <h4 class="mb-4 text-xl font-bold text-gray-800">付款摘要</h4>

        @if($userType === 'student')
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <span class="text-gray-700">{{ $plans['student'][$selectedPlan]['name'] }}</span>
                    <span class="font-semibold">NT$ {{ number_format($plans['student'][$selectedPlan]['price']) }}</span>
                </div>

                @if($includeBanquet)
                <div class="flex items-center justify-between">
                    <span class="text-gray-700">大會晚宴</span>
                    <span class="font-semibold">NT$ {{ number_format($plans['student'][$selectedPlan]['banquet_price']) }}</span>
                </div>
                @endif
            </div>
        @else
            <div class="flex items-center justify-between">
                <span class="text-gray-700">{{ $plans['general'][$selectedPlan]['name'] }} ({{ $this->getMembershipLabel() }})</span>
                <span class="font-semibold">NT$ {{ number_format($plans['general'][$selectedPlan]['prices'][$membershipType]) }}</span>
            </div>
        @endif

        <hr class="my-4 border-gray-300">
        <div class="flex items-center justify-between text-xl font-bold">
            <span class="text-gray-800">總計</span>
            <span class="text-red-600">NT$ {{ number_format($this->getCurrentPrice()) }}</span>
        </div>
    </div>

    <!-- 付款按鈕 -->
    <button wire:click="checkout"
            class="w-full px-6 py-4 text-xl font-bold text-white transition duration-200 ease-in-out transform bg-red-600 rounded-lg hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
        <div wire:loading wire:target="checkout" class="inline">
            <svg class="inline w-6 h-6 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            處理中...
        </div>
        <span wire:loading.remove wire:target="checkout">
            前往信用卡付款 - NT$ {{ number_format($this->getCurrentPrice()) }}
        </span>
    </button>

    <!-- 付款說明 -->
    <div class="mt-6 space-y-1 text-sm text-center text-gray-500">
        <p>• 使用綠界金流安全付款</p>
        <p>• 支援各大信用卡</p>
        <p>• 付款後立即完成註冊</p>
        @if($userType !== 'student')
            <p>• 一般身分註冊費已包含大會晚宴</p>
        @endif
    </div>
</div>
