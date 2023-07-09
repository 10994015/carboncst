<div id="seminar-page" x-data="{
    openModel:false,
    isLoading:false,
    isToggleLoading:false,
    openModelFn(e){
        this.openModel = ture
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
    <section class="seminar">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>臺灣碳材料學術研討會</h2>
            <label for="">
                <input type="text" placeholder="搜尋..." wire:model="inputText" />
                <button wire:click='searchFn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </label>
        </div>
        <div class="items">
            @foreach ($seminars as $seminar)
            <div class="item">
                <div class="imgbox" wire:click="openImgModel({{$seminar->id}})" x-on:click="isLoading = true">
                    <div class="light"></div>
                    @if($seminar->image)
                    <img src="{{$seminar->image}}" alt="{{$seminar->title}}" />
                    @else
                    <img src="/images/news.jpg" />
                    @endif
                </div>
                <div class="content">
                    <h4>{{$seminar->title}}</h4>
                    <p>
                        {!! $seminar->content !!}
                    </p>
                    @if($seminar->link)
                    <a href="{{$seminar->link}}">大會網站</a>
                    @endif
                    <small>{{$seminar->updated_at}}</small>
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