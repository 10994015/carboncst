<div class="home" id="home">
    <div class="banners">
        @foreach($banners as $banner)
        <a href="{{$banner->url ?? 'javascript:;'}}"><img src="{{$banner->image}}" alt="臺灣碳材料學會" /></a>
        @endforeach
    </div>
    <section class="page-container">
        <div class="container">
            <a href="/news" class="item news">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-[60px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
                <h4>最新消息</h4>
            </a>
            <a href="/cst-database" class="item database">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-[60px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>

                <h4>碳才資料庫</h4>
            </a>
            <a href="/forum" class="item forum">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-[60px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <h4>碳材料論壇</h4>
            </a>
        </div>

    </section>
    <section class="news">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>最新消息 News</h2>
            <a href="/news" class="readmore">READ MORE...</a>
        </div>
        <div class="items">
            @foreach($articles as $article)
            <div class="item">
                <div class="imgbox">
                    <div class="light"></div>
                    <img src="/images/news.jpg" alt="">
                </div>
                <div class="content">
                    <span>@if($article->category === 0)會務公告 @else 徵才公告 @endif</span>
                    <a href="/news/{{$article->slug}}">{{$article->title}}</a>
                    <p>
                        @php echo nl2br($article->content) @endphp
                    </p>
                    <small>{{$article->updated_at}}</small>
                </div>
            </div>
            @endforeach
        </div>

    </section>
</div>

@push('scripts')
<script>
    $(document).ready(function(){
      $('.banners').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    });
</script>
@endpush