<div class="home" id="home">
    <div class="banners">
        @foreach($banners as $banner)
        <a href="{{$banner->url ?? 'javascript:;'}}"><img src="{{$banner->image}}" alt="臺灣碳材料學會" /></a>
        @endforeach
    </div>
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