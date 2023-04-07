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
            @foreach($forums as $i=>$forum)
            <div class="chairman">
                <div class="title @if($i===0) active @endif" x-on:click="openText($event)">
                    <h2>{{$forum->title}}</h2>
                </div>
                <div class="text @if($i===0) open @endif">
                    <article>
                        <div class="link-group">
                            @if($forum->button_1)
                            <a href="{{$forum->link_1}}"> {{$forum->button_1}} </a>
                            @endif
                            @if($forum->button_2)
                            <a href="{{$forum->link_2}}"> {{$forum->button_2}} </a>
                            @endif
                            @if($forum->button_3)
                            <a href="{{$forum->link_3}}"> {{$forum->button_3}} </a>
                            @endif
                            @if($forum->button_4)
                            <a href="{{$forum->link_4}}"> {{$forum->button_4}} </a>
                            @endif
                            @if($forum->button_5)
                            <a href="{{$forum->link_5}}"> {{$forum->button_5}} </a>
                            @endif
                        </div>
                        {{$forum->content}}
                        <img src="{{$forum->image}}" />
                    </article>
                </div>
            </div>
            @endforeach
        </div>

    </section>
</div>