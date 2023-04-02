<nav class="navigation" id="navigation" x-data="{
    isAbout:false,
    isInfo:false,
}">
    <i class="fas fa-times" id="menuClose"></i>
    <a href="javascript:;" x-on:click="isInfo = false;isAbout = !isAbout">
        <p>關於學會</p><span>About CST</span>
    </a>
    <ul :class="{'open':isAbout}">
        <a href="/">➤ 理事長的話</a>
        <a href="/">➤ 學會簡介</a>
        <a href="/">➤ 組織架構</a>
        <a href="/">➤ 學會平台小組</a>
        <a href="/">➤ 學會章程</a>
    </ul>
    <a href="">
        <p>學會獎項</p><span>CST Awards</span>
    </a>
    <a href="">
        <p>加入會員</p><span>Join Member</span>
    </a>
    <a href="">
        <p>『碳才』資料庫</p><span>CST Database</span>
    </a>
    <a href="javascript:;" x-on:click="isAbout = false;isInfo = !isInfo">
        <p>論壇&研討會資訊</p><span>Seminar Information</span>
    </a>
    <ul :class="{'open':isInfo}">
        <li onclick="window.loacation.href='/' ">➤ 臺灣碳材料學術研討會</li>
        <li onclick="window.loacation.href='/' ">➤ 國內外研討會</li>
        <li onclick="window.loacation.href='/' ">➤ 碳材料論壇</li>
    </ul>
    <a href="">
        <p>聯絡我們</p><span>Contact Us</span>
    </a>
</nav>