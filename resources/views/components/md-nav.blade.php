<nav class="navigation" id="navigation" x-data="{
    isAbout:false,
    isInfo:false,
    isAwards:false,
    isUser:false,
    toggleMenuAbout() {
        this.isInfo = false;
        this.isAwards = false;
        this.isUser = false;
        this.isAbout = !this.isAbout;
    },
    toggleMenuInfo() {
        this.isAbout = false;
        this.isAwards = false;
        this.isUser = false;
        this.isInfo = !this.isInfo;
    },
    toggleMenuAwards() {
        this.isAbout = false;
        this.isInfo = false;
        this.isUser = false;
        this.isAwards = !this.isAwards;
    },
    toggleMenuUser() {
        this.isAbout = false;
        this.isInfo = false;
        this.isAwards = false;
        this.isUser = !this.isUser;
    }
}">
    <i class="fas fa-times" id="menuClose"></i>

    <!-- 登入狀態區域 (手機版頂部) -->
    <div class="mobile-auth-section">
        @auth
            <!-- 已登入：簡潔版用戶資訊 -->
            <ul :class="{'open':isUser}" class="mobile-user-dropdown">
                <a href="/profile">➤ 個人資料</a>
                <a href="/payment/history">➤ 付款紀錄</a>
                <a href="javascript:;" onclick="confirmLogout()" class="logout-link">➤ 登出</a>
            </ul>
        @else
            <!-- 未登入：顯示登入/註冊按鈕 -->
            <div class="mobile-auth-buttons">
                <a href="{{ route('login') }}" class="mobile-login-btn">會員登入</a>
                <a href="{{ route('register') }}" class="mobile-register-btn">立即註冊</a>
            </div>
        @endauth
    </div>

    <!-- 原有的導航選單 -->
    <a href="/">
        <p>首頁</p><span>Home</span>
    </a>
    <a href="/news">
        <p>最新消息</p><span>News</span>
    </a>
    <a href="javascript:;" x-on:click="toggleMenuAbout()">
        <p>關於學會</p><span>About CST</span>
    </a>
    <ul :class="{'open':isAbout}">
        <a href="/chairman">➤ 理事長的話</a>
        <a href="/learnabout">➤ 學會簡介</a>
        <a href="/organization">➤ 組織架構</a>
        <a href="/cst-group">➤ 學會平台小組</a>
        <a href="/learnchart">➤ 學會章程</a>
    </ul>
    <a href="javascript:;" x-on:click="toggleMenuAwards()">
        <p>學會獎項</p><span>CST Awards</span>
    </a>
    <ul :class="{'open':isAwards}">
        <a href="/awards">➤ 實施辦法</a>
        <a href="/awardprogram">➤ 歷年獲獎名單</a>
        <a href="/letter">➤ 推薦書下載</a>
    </ul>
    <a href="/join-member">
        <p>加入會員</p><span>Join Member</span>
    </a>
    <a href="/cst-database">
        <p>『碳才』資料庫</p><span>CST Database</span>
    </a>
    <a href="javascript:;" x-on:click="toggleMenuInfo()">
        <p>論壇&研討會資訊</p><span>Seminar Information</span>
    </a>
    <ul :class="{'open':isInfo}"">
        <a href="/cst-seminar">➤ 臺灣碳材料學術研討會</a>
        <a href="/oversea">➤ 國內外研討會</a>
        <a href="/forum">➤ 碳材料論壇</a>
    </ul>
    <a href="/bulletin">
        <p>會刊專區</p><span>Bulletin Section</span>
    </a>
    <a href="/contact">
        <p>聯絡我們</p><span>Contact Us</span>
    </a>
    <a href="/payment">
        <p>付款專區</p><span>Payment</span>
    </a>

    <!-- 隱藏的登出表單 -->
    @auth
        <form id="logout-form-mobile" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    @endauth
</nav>
