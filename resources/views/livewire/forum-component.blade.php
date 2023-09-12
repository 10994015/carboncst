<div id="forum-page" x-data="{
    openModel:false,
    isLoading:false,
    isToggleLoading:false,
    openModelFn(e){
        this.openModel = ture
    },
    openText:function(ev){
        if(ev.target.tagName === 'P' || ev.target.tagName === 'H2'){
            ev.target.parentNode.classList.toggle('active')
            ev.target.parentNode.parentNode.querySelector('.text').classList.toggle('open')
            return;
        }
        ev.target.classList.toggle('active')
        ev.target.parentNode.querySelector('.text').classList.toggle('open')
    }
}" x-init="
    window.addEventListener('openImgModel', function(event) {
        isLoading = false
        openModel = true
    });
    window.addEventListener('successToggle', function(event) {
        isToggleLoading = false
    });
">
    <section class="forum">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>碳材料論壇</h2>
        </div>
        <div class="content">
            @foreach($forums as $i=>$forum)
            <div class="chairman">
                <div class="title @if(in_array($i, $openArr)) active @endif" wire:click="openArrFn({{$i}})">
                    <h2>{{$forum->title}}</h2>
                </div>
                <div class="text @if(in_array($i, $openArr)) open @endif">
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
                        {{ nl2br($forum->content) }}
                        <img class="cursor-pointer" src="{{$forum->image}}" wire:click="openImgModel({{$forum->id}})"
                            x-on:click="isLoading = true" />
                    </article>
                </div>
            </div>
            @endforeach
        </div>

    </section>

    <div class="loading" x-show="isLoading" x-cloak style="display: none">
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
    </div>
    <div class="img-model" id="img-model" x-show="openModel" x-cloak style="display: none">
        <div class="content">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" x-on:click="openModel = false">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <img src="{{$image}}" />
            <div class="loading" x-show="isToggleLoading" x-cloak style="display: none">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
            </div>
        </div>

        <div class="smallImgList">
            @foreach($images as $img)
            <img src="{{$img}}" x-on:click="isToggleLoading = true" wire:click="toggleImage('{{$img}}')" />
            @endforeach
        </div>
    </div>
</div>