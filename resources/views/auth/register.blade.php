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
                    <h1 class="logo-text">註冊帳號</h1>
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

                <!-- Membership Type -->
                <div class="form-group">
                    <label class="form-label">身分類型</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio"
                                   name="membership_type"
                                   value="guest"
                                   class="carbon-radio"
                                   {{ old('membership_type', 'guest') === 'guest' ? 'checked' : '' }}
                                   onchange="toggleStudentFields()">
                            <span class="radio-custom"></span>
                            <span class="radio-text">一般身分</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio"
                                   name="membership_type"
                                   value="student"
                                   class="carbon-radio"
                                   {{ old('membership_type') === 'student' ? 'checked' : '' }}
                                   onchange="toggleStudentFields()">
                            <span class="radio-custom"></span>
                            <span class="radio-text">學生身分</span>
                        </label>
                    </div>
                </div>

                <!-- Student Fields (Hidden by default) -->
                <div id="student-fields" class="student-fields" style="display: {{ old('membership_type') === 'student' ? 'block' : 'none' }}">
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
        function toggleStudentFields() {
            const studentRadio = document.querySelector('input[name="membership_type"][value="student"]');
            const studentFields = document.getElementById('student-fields');
            const schoolInput = document.getElementById('school');
            const studentIdInput = document.getElementById('student_id');

            if (studentRadio.checked) {
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

        // 頁面載入時檢查選擇的身分類型
        document.addEventListener('DOMContentLoaded', function() {
            toggleStudentFields();
        });
    </script>

    <!-- 新增的 CSS 樣式 -->
    <style>
        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 8px;
        }

        .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 8px 0;
            transition: all 0.2s ease;
        }

        .radio-label:hover {
            background-color: rgba(45, 45, 45, 0.05);
            border-radius: 6px;
            padding-left: 8px;
            padding-right: 8px;
        }

        .carbon-radio {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        .radio-custom {
            position: relative;
            width: 20px;
            height: 20px;
            background-color: #fff;
            border: 2px solid #ddd;
            border-radius: 50%;
            margin-right: 12px;
            transition: all 0.2s ease;
        }

        .carbon-radio:checked + .radio-custom {
            border-color: #2d2d2d;
            background-color: #2d2d2d;
        }

        .carbon-radio:checked + .radio-custom::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
        }

        .radio-text {
            color: #2d2d2d;
            font-weight: 500;
            font-size: 14px;
        }

        .carbon-radio:checked + .radio-custom + .radio-text {
            color: #2d2d2d;
            font-weight: 600;
        }

        .student-fields {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #eee;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</x-guest-layout>
