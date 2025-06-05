<div class="member-management-container">
    <!-- 頁面標題 -->
    <div class="page-header">
        <div class="header-content">
            <h1 class="page-title">
                <i class="fas fa-users"></i>
                會員管理
            </h1>
            <p class="page-subtitle">管理系統中的所有會員資料</p>
        </div>
        <div class="header-actions">
            <button wire:click="showCreateForm" class="btn btn-primary">
                <i class="fas fa-plus"></i>
                新增會員
            </button>
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

    <!-- 新增會員表單 -->
    @if($showCreateForm)
    <div class="create-form-card">
        <div class="card-header">
            <h3>新增會員</h3>
            <button wire:click="cancelCreate" class="btn-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="card-content">
            <form wire:submit.prevent="createUser" class="member-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>姓名 <span class="required">*</span></label>
                        <input type="text" wire:model="createForm.name" class="form-input @error('createForm.name') error @enderror">
                        @error('createForm.name')<span class="error-message">{{ $message }}</span>@enderror
                    </div>
                    <div class="form-group">
                        <label>電子郵件 <span class="required">*</span></label>
                        <input type="email" wire:model="createForm.email" class="form-input @error('createForm.email') error @enderror">
                        @error('createForm.email')<span class="error-message">{{ $message }}</span>@enderror
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>密碼 <span class="required">*</span></label>
                        <input type="password" wire:model="createForm.password" class="form-input @error('createForm.password') error @enderror">
                        @error('createForm.password')<span class="error-message">{{ $message }}</span>@enderror
                    </div>
                    <div class="form-group">
                        <label>生日</label>
                        <input type="date" wire:model="createForm.birthday" class="form-input @error('createForm.birthday') error @enderror">
                        @error('createForm.birthday')<span class="error-message">{{ $message }}</span>@enderror
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>會員身分 <span class="required">*</span></label>
                        <select wire:model="createForm.membership_type" class="form-select @error('createForm.membership_type') error @enderror">
                            <option value="guest">訪客</option>
                            <option value="regular">一般會員</option>
                            <option value="premium">永久會員</option>
                            <option value="student">學生會員</option>
                        </select>
                        @error('createForm.membership_type')<span class="error-message">{{ $message }}</span>@enderror
                    </div>
                    <div class="form-group">
                        <!-- 移除管理員權限選項 -->
                    </div>
                </div>

                @if($createForm['membership_type'] === 'student' && !$createForm['is_admin'])
                <div class="student-fields">
                    <div class="form-row">
                        <div class="form-group">
                            <label>就讀學校 <span class="required">*</span></label>
                            <input type="text" wire:model="createForm.school" class="form-input @error('createForm.school') error @enderror">
                            @error('createForm.school')<span class="error-message">{{ $message }}</span>@enderror
                        </div>
                        <div class="form-group">
                            <label>學號 <span class="required">*</span></label>
                            <input type="text" wire:model="createForm.student_id" class="form-input @error('createForm.student_id') error @enderror">
                            @error('createForm.student_id')<span class="error-message">{{ $message }}</span>@enderror
                        </div>
                    </div>
                </div>
                @endif

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> 建立會員
                    </button>
                    <button type="button" wire:click="cancelCreate" class="btn btn-secondary">
                        <i class="fas fa-times"></i> 取消
                    </button>
                </div>
            </form>
        </div>
    </div>
    @endif

    <!-- 搜尋和篩選 -->
    <div class="filters-card">
        <div class="filters-row">
            <div class="search-group">
                <div class="search-input-wrapper">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text"
                           wire:model.debounce.300ms="search"
                           placeholder="搜尋姓名、信箱、學校或學號..."
                           class="search-input">
                </div>
            </div>

            <div class="filter-group">
                <select wire:model="membershipFilter" class="filter-select">
                    <option value="">所有身分</option>
                    <option value="guest">訪客</option>
                    <option value="regular">一般會員</option>
                    <option value="premium">永久會員</option>
                    <option value="student">學生會員</option>
                </select>
            </div>

            <div class="per-page-group">
                <select wire:model="perPage" class="filter-select">
                    <option value="10">10筆/頁</option>
                    <option value="15">15筆/頁</option>
                    <option value="25">25筆/頁</option>
                    <option value="50">50筆/頁</option>
                </select>
            </div>
        </div>
    </div>

    <!-- 會員列表 -->
    <div class="members-card">
        <div class="table-wrapper">
            <table class="members-table">
                <thead>
                    <tr>
                        <th wire:click="sortBy('name')" class="sortable">
                            姓名
                            @if($sortField === 'name')
                                <i class="fas fa-sort-{{ $sortDirection === 'asc' ? 'up' : 'down' }}"></i>
                            @else
                                <i class="fas fa-sort"></i>
                            @endif
                        </th>
                        <th wire:click="sortBy('email')" class="sortable">
                            電子郵件
                            @if($sortField === 'email')
                                <i class="fas fa-sort-{{ $sortDirection === 'asc' ? 'up' : 'down' }}"></i>
                            @else
                                <i class="fas fa-sort"></i>
                            @endif
                        </th>
                        <th>會員身分</th>
                        <th>學校/學號</th>
                        <th wire:click="sortBy('created_at')" class="sortable">
                            註冊時間
                            @if($sortField === 'created_at')
                                <i class="fas fa-sort-{{ $sortDirection === 'asc' ? 'up' : 'down' }}"></i>
                            @else
                                <i class="fas fa-sort"></i>
                            @endif
                        </th>
                        <th class="actions-col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($users as $user)
                        <tr class="{{ $editingUserId === $user->id ? 'editing' : '' }}">
                            @if($editingUserId === $user->id)
                                <!-- 編輯模式 -->
                                <td>
                                    <input type="text" wire:model="editForm.name" class="table-input @error('editForm.name') error @enderror">
                                    @error('editForm.name')<div class="table-error">{{ $message }}</div>@enderror
                                </td>
                                <td>
                                    <input type="email" wire:model="editForm.email" class="table-input @error('editForm.email') error @enderror">
                                    @error('editForm.email')<div class="table-error">{{ $message }}</div>@enderror
                                </td>
                                <td>
                                    <div class="membership-edit">
                                        <select wire:model="editForm.membership_type" class="table-select @error('editForm.membership_type') error @enderror">
                                            <option value="guest">訪客</option>
                                            <option value="regular">一般會員</option>
                                            <option value="premium">永久會員</option>
                                            <option value="student">學生會員</option>
                                        </select>
                                        @error('editForm.membership_type')<div class="table-error">{{ $message }}</div>@enderror
                                    </div>
                                </td>
                                <td>
                                    @if($editForm['membership_type'] === 'student' && !$editForm['is_admin'])
                                        <div class="student-edit">
                                            <input type="text" wire:model="editForm.school" placeholder="學校" class="table-input mini @error('editForm.school') error @enderror">
                                            <input type="text" wire:model="editForm.student_id" placeholder="學號" class="table-input mini @error('editForm.student_id') error @enderror">
                                            @error('editForm.school')<div class="table-error">{{ $message }}</div>@enderror
                                            @error('editForm.student_id')<div class="table-error">{{ $message }}</div>@enderror
                                        </div>
                                    @else
                                        <span class="text-muted">-</span>
                                    @endif
                                </td>
                                <td>
                                    <input type="date" wire:model="editForm.birthday" class="table-input @error('editForm.birthday') error @enderror">
                                    @error('editForm.birthday')<div class="table-error">{{ $message }}</div>@enderror
                                </td>
                                <td class="actions-col">
                                    <div class="action-buttons">
                                        <button wire:click="updateUser" class="btn-action save" title="儲存">
                                            <i class="fas fa-check"></i>
                                        </button>
                                        <button wire:click="cancelEdit" class="btn-action cancel" title="取消">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </td>
                            @else
                                <!-- 檢視模式 -->
                                <td>
                                    <div class="user-info">
                                        <div class="user-name">{{ $user->name }}</div>
                                        @if($user->birthday)
                                            <div class="user-meta">{{ $user->birthday->format('Y-m-d') }}</div>
                                        @endif
                                    </div>
                                </td>
                                <td>
                                    <div class="email-cell">{{ $user->email }}</div>
                                </td>
                                <td>
                                    <span class="membership-badge {{ $user->is_admin ? 'admin' : $user->membership_type }}">
                                        @if($user->is_admin)
                                            👑 管理員
                                        @else
                                            {{ $this->getMembershipLabel($user->membership_type) }}
                                        @endif
                                    </span>
                                </td>
                                <td>
                                    @if($user->school || $user->student_id)
                                        <div class="school-info">
                                            @if($user->school)
                                                <div class="school">{{ $user->school }}</div>
                                            @endif
                                            @if($user->student_id)
                                                <div class="student-id">{{ $user->student_id }}</div>
                                            @endif
                                        </div>
                                    @else
                                        <span class="text-muted">-</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="date-info">
                                        {{ $user->created_at->format('Y-m-d') }}
                                        <div class="time-meta">{{ $user->created_at->format('H:i') }}</div>
                                    </div>
                                </td>
                                <td class="actions-col">
                                    <div class="action-buttons">
                                        <button wire:click="editUser({{ $user->id }})" class="btn-action edit" title="編輯">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        {{-- <button wire:click="deleteUser({{ $user->id }})"
                                                onclick="return confirm('確定要刪除此會員嗎？')"
                                                class="btn-action delete" title="刪除">
                                            <i class="fas fa-trash"></i>
                                        </button> --}}
                                    </div>
                                </td>
                            @endif
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="empty-state">
                                <div class="empty-content">
                                    <i class="fas fa-users"></i>
                                    <p>沒有找到符合條件的會員</p>
                                </div>
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <!-- 分頁 -->
        <div class="pagination-wrapper">
            {{ $users->links() }}
        </div>
    </div>
</div>

<!-- CSS 樣式 -->
<style>
    .member-management-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }

    .page-header {
        display: flex;
        justify-content: between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #eee;
    }

    .page-title {
        font-size: 28px;
        font-weight: bold;
        color: #2d2d2d;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .page-subtitle {
        color: #666;
        margin: 8px 0 0 0;
        font-size: 16px;
    }

    .header-actions {
        margin-left: auto;
    }

    .alert {
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .alert-success {
        background-color: #e8f5e8;
        color: #388e3c;
        border: 1px solid #c8e6c9;
    }

    .alert-error {
        background-color: #ffebee;
        color: #c62828;
        border: 1px solid #ef9a9a;
    }

    .create-form-card, .filters-card, .members-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    .card-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-header h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: #2d2d2d;
    }

    .btn-close {
        background: none;
        border: none;
        font-size: 18px;
        color: #666;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
    }

    .btn-close:hover {
        background-color: #f5f5f5;
        color: #333;
    }

    .card-content {
        padding: 20px;
    }

    .member-form {
        max-width: 800px;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-group label {
        font-weight: 600;
        color: #2d2d2d;
        margin-bottom: 8px;
        font-size: 14px;
    }

    .required {
        color: #e74c3c;
    }

    .form-input, .form-select {
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
        transition: border-color 0.2s;
    }

    .form-input:focus, .form-select:focus {
        outline: none;
        border-color: #2d2d2d;
    }

    .form-input.error, .form-select.error {
        border-color: #e74c3c;
    }

    .error-message {
        color: #e74c3c;
        font-size: 12px;
        margin-top: 4px;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 8px;
    }

    .checkbox-input {
        position: absolute;
        opacity: 0;
    }

    .checkbox-custom {
        width: 18px;
        height: 18px;
        border: 2px solid #ddd;
        border-radius: 4px;
        margin-right: 8px;
        position: relative;
        transition: all 0.2s;
    }

    .checkbox-input:checked + .checkbox-custom {
        background-color: #2d2d2d;
        border-color: #2d2d2d;
    }

    .checkbox-input:checked + .checkbox-custom::after {
        content: '✓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 12px;
        font-weight: bold;
    }

    .checkbox-text {
        font-size: 14px;
        color: #2d2d2d;
    }

    .student-fields {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }

    .form-actions {
        display: flex;
        gap: 12px;
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s;
    }

    .btn-primary {
        background-color: #2d2d2d;
        color: white;
    }

    .btn-primary:hover {
        background-color: #1a1a1a;
    }

    .btn-secondary {
        background-color: #6c757d;
        color: white;
    }

    .btn-secondary:hover {
        background-color: #5a6268;
    }

    .filters-card {
        padding: 20px;
    }

    .filters-row {
        display: flex;
        gap: 20px;
        align-items: center;
        flex-wrap: wrap;
    }

    .search-group {
        flex: 1;
        min-width: 300px;
    }

    .search-input-wrapper {
        position: relative;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 14px;
    }

    .search-input {
        width: 100%;
        padding: 12px 12px 12px 40px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
    }

    .search-input:focus {
        outline: none;
        border-color: #2d2d2d;
    }

    .filter-group, .per-page-group {
        min-width: 150px;
    }

    .filter-select {
        width: 100%;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
        background-color: white;
    }

    .filter-select:focus {
        outline: none;
        border-color: #2d2d2d;
    }

    .table-wrapper {
        overflow-x: auto;
    }

    .members-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
    }

    .members-table th {
        background-color: #f8f9fa;
        padding: 16px 12px;
        text-align: left;
        font-weight: 600;
        color: #2d2d2d;
        border-bottom: 2px solid #dee2e6;
        white-space: nowrap;
    }

    .members-table th.sortable {
        cursor: pointer;
        user-select: none;
        position: relative;
    }

    .members-table th.sortable:hover {
        background-color: #e9ecef;
    }

    .members-table th i {
        margin-left: 8px;
        color: #666;
    }

    .members-table td {
        padding: 16px 12px;
        border-bottom: 1px solid #dee2e6;
        vertical-align: top;
    }

    .members-table tr:hover {
        background-color: #f8f9fa;
    }

    .members-table tr.editing {
        background-color: #fff3cd;
    }

    .user-info {
        display: flex;
        flex-direction: column;
    }

    .user-name {
        font-weight: 600;
        color: #2d2d2d;
        margin-bottom: 4px;
    }

    .user-meta, .time-meta {
        font-size: 12px;
        color: #666;
    }

    .email-cell {
        font-family: monospace;
        color: #495057;
    }

    .membership-badge {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
    }

    .membership-badge.admin {
        background-color: #ffebee;
        color: #c62828;
        border: 1px solid #ef9a9a;
    }

    .membership-badge.guest {
        background-color: #e3f2fd;
        color: #1976d2;
        border: 1px solid #bbdefb;
    }

    .membership-badge.regular {
        background-color: #e8f5e8;
        color: #388e3c;
        border: 1px solid #c8e6c9;
    }

    .membership-badge.premium {
        background-color: #fff3e0;
        color: #f57c00;
        border: 1px solid #ffcc02;
    }

    .membership-badge.student {
        background-color: #f3e5f5;
        color: #7b1fa2;
        border: 1px solid #ce93d8;
    }

    .school-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .school {
        font-weight: 500;
        color: #2d2d2d;
    }

    .student-id {
        font-size: 12px;
        color: #666;
        font-family: monospace;
    }

    .date-info {
        display: flex;
        flex-direction: column;
    }

    .text-muted {
        color: #6c757d;
        font-style: italic;
    }

    .actions-col {
        width: 120px;
        text-align: center;
    }

    .action-buttons {
        display: flex;
        gap: 8px;
        justify-content: center;
    }

    .btn-action {
        width: 36px;
        height: 36px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        transition: all 0.2s;
    }

    .btn-action.edit {
        background-color: #17a2b8;
        color: white;
    }

    .btn-action.edit:hover {
        background-color: #138496;
    }

    .btn-action.delete {
        background-color: #dc3545;
        color: white;
    }

    .btn-action.delete:hover {
        background-color: #c82333;
    }

    .btn-action.save {
        background-color: #28a745;
        color: white;
    }

    .btn-action.save:hover {
        background-color: #218838;
    }

    .btn-action.cancel {
        background-color: #6c757d;
        color: white;
    }

    .btn-action.cancel:hover {
        background-color: #5a6268;
    }

    .table-input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }

    .table-input.mini {
        margin-bottom: 4px;
    }

    .table-input:focus {
        outline: none;
        border-color: #2d2d2d;
    }

    .table-input.error {
        border-color: #e74c3c;
    }

    .table-select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        background-color: white;
        margin-bottom: 8px;
    }

    .table-select:focus {
        outline: none;
        border-color: #2d2d2d;
    }

    .table-error {
        color: #e74c3c;
        font-size: 11px;
        margin-top: 2px;
    }

    .membership-edit {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .admin-checkbox {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
    }

    .admin-checkbox input {
        margin: 0;
    }

    .student-edit {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
    }

    .empty-content {
        color: #6c757d;
    }

    .empty-content i {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
    }

    .empty-content p {
        font-size: 16px;
        margin: 0;
    }

    .pagination-wrapper {
        padding: 20px;
        border-top: 1px solid #dee2e6;
        display: flex;
        justify-content: center;
    }

.pagination-wrapper {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.pagination {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.pagination .page-item {
    margin: 0 2px;
}

.pagination .page-link {
    display: block;
    padding: 8px 12px;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
}

.pagination .page-link:hover {
    color: #0056b3;
    background-color: #e9ecef;
    border-color: #dee2e6;
}

.pagination .page-item.active .page-link {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.pagination .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
}
    /* 響應式設計 */
    @media (max-width: 768px) {
        .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        .header-actions {
            margin-left: 0;
        }

        .filters-row {
            flex-direction: column;
            align-items: stretch;
        }

        .search-group {
            min-width: auto;
        }

        .form-row {
            grid-template-columns: 1fr;
        }

        .members-table {
            font-size: 12px;
        }

        .members-table th,
        .members-table td {
            padding: 12px 8px;
        }
    }
</style>
