<x-guest-layout>
    <div class="carbon-login-container">
        <div class="carbon-login-card">
            <!-- Logo Section -->
            <div class="logo-section">
                <div class="carbon-logo">
                    <div class="logo-icon">
                        <svg viewBox="0 0 100 100" class="logo-svg">
                            <circle cx="50" cy="50" r="45" fill="#2d2d2d" stroke="#666" stroke-width="2"/>
                            <text x="50" y="55" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">C</text>
                        </svg>
                    </div>
                    <h1 class="logo-text">碳材料學會</h1>
                    <p class="logo-subtitle">Carbon Materials Society</p>
                </div>
            </div>

            <!-- Session Status -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <!-- Validation Errors -->
            <x-auth-validation-errors class="mb-4" :errors="$errors" />

            <!-- Login Form -->
            <form method="POST" action="{{ route('login') }}" class="carbon-form">
                @csrf

                <!-- Email Address -->
                <div class="form-group">
                    <label for="email" class="form-label">電子郵件</label>
                    <input id="email"
                           class="carbon-input"
                           type="email"
                           name="email"
                           value="{{ old('email') }}"
                           required
                           autofocus
                           placeholder="請輸入您的電子郵件">
                </div>

                <!-- Password -->
                <div class="form-group">
                    <label for="password" class="form-label">密碼</label>
                    <input id="password"
                           class="carbon-input"
                           type="password"
                           name="password"
                           required
                           autocomplete="current-password"
                           placeholder="請輸入您的密碼">
                </div>

                <!-- Remember Me -->
                <div class="form-group-checkbox">
                    <label for="remember_me" class="checkbox-label">
                        <input id="remember_me"
                               type="checkbox"
                               class="carbon-checkbox"
                               name="remember">
                        <span class="checkbox-custom"></span>
                        <span class="checkbox-text">記住我的登入狀態</span>
                    </label>
                </div>

                <!-- Form Actions -->
                <div class="form-actions">
                    <button type="submit" class="carbon-button">
                        <span class="button-text">登入</span>
                    </button>

                    <div class="action-links">
                        <a class="forgot-password-link" href="/forgot-password">
                            忘記密碼？
                        </a>

                        @if (Route::has('register'))
                            <span class="link-divider">|</span>
                            <a class="register-link" href="{{ route('register') }}">
                                註冊帳號
                            </a>
                        @endif
                    </div>
                </div>
            </form>

            <!-- Footer -->
            <div class="login-footer">
                <p>碳材料科學技術研究與應用</p>
            </div>
        </div>
    </div>
</x-guest-layout>
