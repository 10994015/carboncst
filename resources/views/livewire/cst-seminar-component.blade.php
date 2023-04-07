<div id="seminar-page">
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
                <div class="imgbox">
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
                        @php echo nl2br($seminar->content) @endphp
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

</div>