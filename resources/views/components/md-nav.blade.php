<nav class="navigation" id="navigation" x-data="{
    isAbout:false,
    isInfo:false,
    isAwards:false,
}">
    <i class="fas fa-times" id="menuClose"></i>
    <a href="/">
        <p>首頁</p><span>Home</span>
    </a>
    <a href="/news">
        <p>最新消息</p><span>News</span>
    </a>
    <a href="javascript:;" x-on:click="isInfo = false;isAwards=false,isAbout = !isAbout">
        <p>關於學會</p><span>About CST</span>
    </a>
    <ul :class="{'open':isAbout}">
        <a href="/chairman">➤ 理事長的話</a>
        <a href="/learnabout">➤ 學會簡介</a>
        <a href="/organization">➤ 組織架構</a>
        <a href="/cst-group">➤ 學會平台小組</a>
        <a href="/learnchart">➤ 學會章程</a>
    </ul>
    <a href="javascript:;" x-on:click="isAbout = false;isInfo=false;isAwards = !isAwards">
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
    <a href="javascript:;" x-on:click="isAbout = false;isAwards=false;isInfo = !isInfo">
        <p>論壇&研討會資訊</p><span>Seminar Information</span>
    </a>
    <ul :class="{'open':isInfo}">
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
</nav>
