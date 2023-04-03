<div id="forum-page">
    <section class="forum">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>碳材料論壇</h2>
        </div>
        <div class="content" x-data="{
            openText:function(ev){
                if(ev.target.tagName === 'P' || ev.target.tagName === 'H2'){
                    ev.target.parentNode.classList.toggle('active')
                    ev.target.parentNode.parentNode.querySelector('.text').classList.toggle('open')
                    return;
                }
                ev.target.classList.toggle('active')
                ev.target.parentNode.querySelector('.text').classList.toggle('open')
            }
        }">
            @for($i=0;$i<3;$i++) <div class="chairman">
                <div class="title @if($i===0) active @endif" x-on:click="openText($event)">
                    <h2>線上工作坊Workshop</h2>
                </div>
                <div class="text @if($i===0) open @endif">
                    <article>
                        <div class="link-group">
                            <a href="/">我要報名</a>
                            <a href="/">論壇簡章</a>
                        </div>
                        石墨烯具有優異的導電、散熱、高比表面積、高電子遷移率、化學穩定性佳、具可撓等特性；其他碳材料家族，例如活性碳、奈米碳管、碳黑、碳纖維、石墨等等均在儲能、觸媒、複合材料、電磁波屏蔽、散熱、環境、感測器等具有非常廣泛的應用前景。
                        本次工作坊的主題特別規劃了上述包括石墨烯及相關奈米碳材料在合成、製備與特性應用進行介紹，我們更聚焦在在碳材於儲能領域的應用，我們將邀請相關的專家學者就鋰離子電池、燃料電池、超級電容器、鋅離子電池乃至於最近最火熱的電動車用電池進行深入淺出的介紹，相信可以透過此工作坊更加了解到碳材料的基本特性以及在能源材料相關的應用。

                        <img src="/images/workshop.jpg" />
                    </article>
                </div>
        </div>
        @endfor
</div>

</section>
</div>