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
                    <h1 class="logo-text">加入碳材料學會</h1>
                    <p class="logo-subtitle">Create Your Account</p>
                </div>
            </div>

            <!-- Validation Errors -->
            <x-auth-validation-errors class="mb-4" :errors="$errors" />

            <!-- Register Form -->
            <form method="POST" action="{{ route('register') }}" class="carbon-form">
                @csrf

                <!-- Name -->
                <div class="form-group">
                    <label for="name" class="form-label">姓名</label>
                    <input id="name"
                           class="carbon-input"
                           type="text"
                           name="name"
                           value="{{ old('name') }}"
                           required
                           autofocus
                           placeholder="請輸入您的姓名">
                </div>

                <!-- Email Address -->
                <div class="form-group">
                    <label for="email" class="form-label">電子郵件</label>
                    <input id="email"
                           class="carbon-input"
                           type="email"
                           name="email"
                           value="{{ old('email') }}"
                           required
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
                           autocomplete="new-password"
                           placeholder="請設定您的密碼">
                </div>

                <!-- Confirm Password -->
                <div class="form-group">
                    <label for="password_confirmation" class="form-label">確認密碼</label>
                    <input id="password_confirmation"
                           class="carbon-input"
                           type="password"
                           name="password_confirmation"
                           required
                           placeholder="請再次輸入密碼">
                </div>

                <!-- Birthday -->
                <div class="form-group">
                    <label for="birthday" class="form-label">生日</label>
                    <input id="birthday"
                           class="carbon-input"
                           type="date"
                           name="birthday"
                           value="{{ old('birthday') }}">
                </div>

                <!-- Student Status -->
                <div class="form-group-checkbox">
                    <label for="is_student" class="checkbox-label">
                        <input id="is_student"
                               type="checkbox"
                               class="carbon-checkbox"
                               name="is_student"
                               value="1"
                               {{ old('is_student') ? 'checked' : '' }}
                               onchange="toggleStudentFields(this)">
                        <span class="checkbox-custom"></span>
                        <span class="checkbox-text">我是學生</span>
                    </label>
                </div>

                <!-- Student Fields (Hidden by default) -->
                <div id="student-fields" class="student-fields" style="display: {{ old('is_student') ? 'block' : 'none' }}">
                    <!-- School -->
                    <div class="form-group">
                        <label for="school" class="form-label">就讀學校</label>
                        <input id="school"
                               class="carbon-input"
                               type="text"
                               name="school"
                               value="{{ old('school') }}"
                               placeholder="請輸入學校名稱（例：國立台灣大學）">
                    </div>

                    <!-- Student ID -->
                    <div class="form-group">
                        <label for="student_id" class="form-label">學號</label>
                        <input id="student_id"
                               class="carbon-input"
                               type="text"
                               name="student_id"
                               value="{{ old('student_id') }}"
                               placeholder="請輸入學號">
                    </div>
                </div>

                <!-- Form Actions -->
                <div class="form-actions">
                    <button type="submit" class="carbon-button">
                        <span class="button-text">註冊</span>
                    </button>

                    <div class="action-links">
                        <a class="login-link" href="{{ route('login') }}">
                            已有帳號？立即登入
                        </a>
                    </div>
                </div>
            </form>

            <!-- Footer -->
            <div class="login-footer">
                <p>碳材料科學技術研究與應用</p>
            </div>
        </div>
    </div>

    <!-- JavaScript for Student Fields Toggle -->
    <script>
        function toggleStudentFields(checkbox) {
            const studentFields = document.getElementById('student-fields');
            const schoolInput = document.getElementById('school');
            const studentIdInput = document.getElementById('student_id');

            if (checkbox.checked) {
                studentFields.style.display = 'block';
                // 如果是學生，設為必填
                schoolInput.setAttribute('required', 'required');
                studentIdInput.setAttribute('required', 'required');
            } else {
                studentFields.style.display = 'none';
                // 如果不是學生，移除必填
                schoolInput.removeAttribute('required');
                studentIdInput.removeAttribute('required');
                // 清空值
                schoolInput.value = '';
                studentIdInput.value = '';
            }
        }

        // 頁面載入時檢查是否已勾選學生
        document.addEventListener('DOMContentLoaded', function() {
            const isStudentCheckbox = document.getElementById('is_student');
            if (isStudentCheckbox.checked) {
                toggleStudentFields(isStudentCheckbox);
            }
        });
    </script>
</x-guest-layout>
