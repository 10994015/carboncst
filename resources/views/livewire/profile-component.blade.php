<div class="profile-container">
    <div class="profile-header">
        <div class="header-content">
            <div class="user-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-info">
                <h1>個人資料</h1>
                <p class="user-subtitle">管理您的碳材料學會會員資訊</p>
                <div class="member-badge">
                    @if($is_student)
                        <span class="badge student">學生會員</span>
                    @else
                        <span class="badge general">一般會員</span>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- 成功/錯誤訊息 -->
    @if($successMessage)
        <div class="alert alert-success">
            <i class="fas fa-check-circle"></i>
            {{ $successMessage }}
        </div>
    @endif

    @if($errorMessage)
        <div class="alert alert-error">
            <i class="fas fa-exclamation-circle"></i>
            {{ $errorMessage }}
        </div>
    @endif

    <!-- 個人資料卡片 -->
    <div class="profile-card">
        <div class="card-header">
            <h2>基本資料</h2>
            <button wire:click="toggleEdit" class="btn-edit">
                @if($isEditing)
                    <i class="fas fa-times"></i> 取消編輯
                @else
                    <i class="fas fa-edit"></i> 編輯資料
                @endif
            </button>
        </div>

        <div class="card-content">
            @if($isEditing)
                <!-- 編輯模式 -->
                <form wire:submit.prevent="updateProfile" class="profile-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">姓名 <span class="required">*</span></label>
                            <input type="text"
                                   id="name"
                                   wire:model="name"
                                   class="form-input @error('name') error @enderror"
                                   placeholder="請輸入您的姓名">
                            @error('name')
                                <span class="error-message">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="email">電子郵件 <span class="required">*</span></label>
                            <input type="email"
                                   id="email"
                                   wire:model="email"
                                   class="form-input @error('email') error @enderror"
                                   placeholder="請輸入您的電子郵件">
                            @error('email')
                                <span class="error-message">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="birthday">生日</label>
                            <input type="date"
                                   id="birthday"
                                   wire:model="birthday"
                                   class="form-input @error('birthday') error @enderror">
                            @error('birthday')
                                <span class="error-message">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox"
                                           wire:model="is_student"
                                           class="checkbox-input">
                                    <span class="checkbox-custom"></span>
                                    <span class="checkbox-text">我是學生</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    @if($is_student)
                        <div class="student-fields">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="school">就讀學校 <span class="required">*</span></label>
                                    <input type="text"
                                           id="school"
                                           wire:model="school"
                                           class="form-input @error('school') error @enderror"
                                           placeholder="請輸入學校名稱">
                                    @error('school')
                                        <span class="error-message">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <label for="student_id">學號 <span class="required">*</span></label>
                                    <input type="text"
                                           id="student_id"
                                           wire:model="student_id"
                                           class="form-input @error('student_id') error @enderror"
                                           placeholder="請輸入學號">
                                    @error('student_id')
                                        <span class="error-message">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    @endif

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> 儲存變更
                        </button>
                        <button type="button" wire:click="toggleEdit" class="btn btn-secondary">
                            <i class="fas fa-times"></i> 取消
                        </button>
                    </div>
                </form>
            @else
                <!-- 檢視模式 -->
                <div class="profile-display">
                    <div class="info-row">
                        <div class="info-item">
                            <label>姓名</label>
                            <span class="value">{{ $name }}</span>
                        </div>
                        <div class="info-item">
                            <label>電子郵件</label>
                            <span class="value">{{ $email }}</span>
                        </div>
                    </div>

                    <div class="info-row">
                        <div class="info-item">
                            <label>生日</label>
                            <span class="value">{{ $birthday ? \Carbon\Carbon::parse($birthday)->format('Y年m月d日') : '未設定' }}</span>
                        </div>
                        <div class="info-item">
                            <label>會員身份</label>
                            <span class="value">{{ $is_student ? '學生會員' : '一般會員' }}</span>
                        </div>
                    </div>

                    @if($is_student && ($school || $student_id))
                        <div class="info-row">
                            @if($school)
                                <div class="info-item">
                                    <label>就讀學校</label>
                                    <span class="value">{{ $school }}</span>
                                </div>
                            @endif
                            @if($student_id)
                                <div class="info-item">
                                    <label>學號</label>
                                    <span class="value">{{ $student_id }}</span>
                                </div>
                            @endif
                        </div>
                    @endif
                </div>
            @endif
        </div>
    </div>

    <!-- 密碼變更卡片 -->
    <div class="profile-card">
        <div class="card-header">
            <h2>密碼管理</h2>
            <button wire:click="togglePasswordForm" class="btn-edit">
                @if($showPasswordForm)
                    <i class="fas fa-times"></i> 取消
                @else
                    <i class="fas fa-key"></i> 變更密碼
                @endif
            </button>
        </div>

        @if($showPasswordForm)
            <div class="card-content">
                <form wire:submit.prevent="updatePassword" class="password-form">
                    <div class="form-group">
                        <label for="current_password">目前密碼 <span class="required">*</span></label>
                        <input type="password"
                               id="current_password"
                               wire:model="current_password"
                               class="form-input @error('current_password') error @enderror"
                               placeholder="請輸入目前密碼">
                        @error('current_password')
                            <span class="error-message">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="new_password">新密碼 <span class="required">*</span></label>
                            <input type="password"
                                   id="new_password"
                                   wire:model="new_password"
                                   class="form-input @error('new_password') error @enderror"
                                   placeholder="請輸入新密碼">
                            @error('new_password')
                                <span class="error-message">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="new_password_confirmation">確認新密碼 <span class="required">*</span></label>
                            <input type="password"
                                   id="new_password_confirmation"
                                   wire:model="new_password_confirmation"
                                   class="form-input"
                                   placeholder="請再次輸入新密碼">
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-key"></i> 更新密碼
                        </button>
                        <button type="button" wire:click="togglePasswordForm" class="btn btn-secondary">
                            <i class="fas fa-times"></i> 取消
                        </button>
                    </div>
                </form>
            </div>
        @else
            <div class="card-content">
                <p class="password-hint">
                    <i class="fas fa-info-circle"></i>
                    為了帳戶安全，建議您定期變更密碼。密碼應包含大小寫字母、數字和特殊字元。
                </p>
            </div>
        @endif
    </div>
</div>
