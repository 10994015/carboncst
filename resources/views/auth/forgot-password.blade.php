<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <img src="/images/logo.png" alt="臺灣碳材料學會" width="200"></a>
            </a>
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            忘記密碼了嗎?沒問題。只需告訴我們您的電子郵件地址,我們將透過電子郵件發送密碼重設連結,讓您可以設定新密碼。
        </div>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" value="電子郵件" />

                <x-input id="email" class="block w-full mt-1" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-button>
                    發送密碼重設連結
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
