<div id="organization-page">
    <section class="organization">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>組織架構</h2>
        </div>
        <div class="content">
            <h3>{{$organiztion->title}}</h3>
            <p>{!! $organiztion->content !!}</p>
            <img src="{{$organiztion->image}}" alt="{{$organiztion->title}}">
        </div>
    </section>
</div>