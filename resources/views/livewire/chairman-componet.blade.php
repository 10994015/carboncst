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
            @foreach($chairmans as $i=>$chairman) <div class="chairman">
                <div class="title @if($i===0) active @endif" x-on:click="openText($event)">
                    <h2>{{$chairman->name}}</h2>
                    <p>{{$chairman->message_date}}</p>
                </div>
                <div class="text @if($i===0) open @endif">
                    <article>
                        <img src="{{$chairman->image}}" class="float-right" />
                        {!! nl2br($chairman->content) !!}
                    </article>
                </div>
            </div>
            @endforeach
        </div>

    </section>
</div>