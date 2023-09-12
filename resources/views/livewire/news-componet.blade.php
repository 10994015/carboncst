<div id="news-page">
    <section class="news">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>最新消息</h2>
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
            @foreach ($articles as $article)
            <div class="item">
                <div class="imgbox">
                    <div class="light"></div>
                    @if($article->image)
                    <img src="{{$article->image}}" alt="{{$article->title}}">
                    @else
                    <img src="/images/news.jpg" alt="{{$article->title}}">
                    @endif
                </div>
                <div class="content">
                    <span>@if($article->category==0) 會務公告 @else 徵才公告 @endif</span>
                    <a href="javascript:;">{{$article->title}}</a>
                    <p>
                        {!! nl2br($article->content) !!}
                    </p>
                    <small>{{$article->updated_at}}</small>
                </div>
            </div>
            @endforeach

        </div>
        {{$articles->links()}}
    </section>

</div>