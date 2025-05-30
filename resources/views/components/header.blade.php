<header class="" id="header">
    <a href="/" class="logo"><img src="/images/logo.png" alt="臺灣碳材料學會"></a>
    <i class="fas fa-bars" id="menuBar"></i>
    <nav>
        <a href="/">
            <p>首頁</p><span>Home</span>
        </a>
        <a href="/news">
            <p>最新消息</p><span>News</span>
        </a>
        <a href="javascript:;">
            <p>關於學會</p><span>About CST</span>
            <ul>
                <li onclick="window.location.href='/chairman'">理事長的話</li>
                <li onclick="window.location.href='/learnabout' ">學會簡介</li>
                <li onclick="window.location.href='/organization' ">組織架構</li>
                <li onclick="window.location.href='/cst-group' ">學會平台小組</li>
                <li onclick="window.location.href='/learnchart' ">學會章程</li>
            </ul>
        </a>
        <a href="javascript:;">
            <p>學會獎項</p><span>CST Awards</span>
            <ul>
                <li onclick="window.location.href='/awards'">實施辦法</li>
                <li onclick="window.location.href='/awardprogram' ">歷年獲獎名單</li>
                <li onclick="window.location.href='/letter' ">推薦書下載</li>
            </ul>
        </a>
        <a href="/join-member">
            <p>加入會員</p><span>Join Member</span>
        </a>
        <a href="/cst-database">
            <p>『碳才』資料庫</p><span>CST Database</span>
        </a>
        <a href="javascript:;">
            <p>論壇&研討會資訊</p><span>Seminar Information</span>
            <ul>
                <li onclick="window.location.href='/cst-seminar' ">臺灣碳材料學術研討會</li>
                <li onclick="window.location.href='/oversea' ">國內外研討會</li>
                <li onclick="window.location.href='/forum' ">碳材料論壇</li>
            </ul>
        </a>
        <a href="/bulletin">
            <p>會刊專區</p><span>Bulletin Section</span>
        </a>
        <a href="/contact">
            <p>聯絡我們</p><span>Contact Us</span>
        </a>
        <a href="/payment">
            <p>付款專區</p><span>Payment</span>
        </a>

        <!-- 登入狀態區域 -->
        @auth
            <!-- 已登入：顯示用戶選單 -->
            <a href="javascript:;" class="member-menu">
                <p>{{ Auth::user()->name }}</p>
                <span>{{ Auth::user()->is_student ? '學生會員' : '一般會員' }}</span>
                <ul>
                    <li class="member-info">
                        <i class="fas fa-user-circle"></i>
                        <span>{{ Auth::user()->name }}</span>
                        <small>{{ Auth::user()->is_student ? '學生會員' : '一般會員' }}</small>
                    </li>
                    <li onclick="window.location.href='/profile'">
                        <i class="fas fa-user-edit"></i>
                        個人資料
                    </li>
                    <li onclick="window.location.href='/payment/history'">
                        <i class="fas fa-credit-card"></i>
                        付款紀錄
                    </li>
                    <li onclick="confirmLogout()" class="logout-item">
                        <i class="fas fa-sign-out-alt"></i>
                        登出
                    </li>
                </ul>
            </a>
        @else
            <!-- 未登入：顯示登入按鈕 -->
            <a href="{{ route('login') }}">
                <p>會員登入</p><span>Member Login</span>
            </a>
        @endauth
    </nav>

    <!-- 隱藏的登出表單 -->
    @auth
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    @endauth
</header>
