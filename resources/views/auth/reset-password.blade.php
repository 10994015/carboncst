<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <img src="/images/logo.png" alt="臺灣碳材料學會" width="200"></a>
            </a>
        </x-slot>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('password.update') }}">
            @csrf

            <!-- Password Reset Token -->
            <input type="hidden" name="token" value="{{ $request->route('token') }}">

            <!-- Email Address -->
            <div>
                <x-label for="email" value="電子郵件" />

                <x-input id="email" class="block w-full mt-1" type="email" name="email" :value="old('email', $request->email)" required autofocus />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-label for="password" value="新密碼" />

                <x-input id="password" class="block w-full mt-1" type="password" name="password" required />
            </div>

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-label for="password_confirmation" value="確認密碼" />

                <x-input id="password_confirmation" class="block w-full mt-1"
                                    type="password"
                                    name="password_confirmation" required />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-button>
                    重設密碼
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
