<div id="chairman-page">
    <section class="chairmans">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>理事長的話</h2>
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
                    <h2>第二屆理事長 戴念華</h2>
                    <p>中華民國109年11月21日</p>
                </div>
                <div class="text @if($i===0) open @endif">
                    <article>
                        首先感謝各位會員及理監事的支持，選我擔任臺灣碳材料學會第二屆理事長，雖然目前我在校內有兼任諸多行政職，但對於學會會務的推動仍會盡心盡力做到最好，並感謝陳軍互教授願意承擔副理事長一職，一起幫忙。此外，也要感謝第一屆蔡理事長、秘書處及理監事對於會務的推動，讓學會由2017年草創至今有明顯的成長與能見度。未來學會會務的推動上，除了會延續第一屆理監事打下的基礎繼續向前望，目前初步想法如下：
                        1.
                        以學會為起點，發行學會刊物：學會刊物的推動需要長時間的規劃與努力，當初於第一屆理監事會議中便有提出此相關想法，我也認為有其必要性，因為其將可幫助臺灣做碳材料相關學術單位、研究機構及產業進行發展。因此，於本屆中，學會將會帶領大家跨出第一步，並冀望大家一同參與及貢獻，此任務也將會由陳軍互副理事長進行統籌，並初步由Special
                        issue開始著手以逐步踏實。

                        2.
                        以學會為橋梁，強化學界/業界合作：第一屆已有提供產學合作和創新創業的平台，於第二屆將會更加深化及落實。由過去經驗得知，將材料觀念導入到業界確實有其重要性及賣點，以染整廠為例，過去乃以環境工程的角度來解決廢水問題，其耗時及耗成本，但我們知道，如果以碳材料來處理的話，整體時間及成本之效率將可大幅提升。因此如何增加碳材料於產業界的參與度，將是未來會持續努力的方向。

                        3.
                        以學會為基石，推動會務永續發展：學會如果要長期耕耘下去的話，設立一專職秘書將有其必要性，其可跟著祕書長進行會務推動及例行性業務處理。但礙於學會目前經費尚不太足，所以較難執行。假如往後歷年皆有研討會及論壇的舉辦，加上產學合作機會而有更多盈餘及穩定收入的話，將會推動專職秘書設立以增加學會會務推動效率。
                        以上三項為本人我對於學會未來發展方向的期待，並也期望各位理監事的參與和支持，謝謝大家！
                    </article>
                </div>
        </div>
        @endfor
</div>

</section>
</div>