<x-app-layout>
    <div class="home" id="home">
        <div class="banners">
            <a href="javascript:;"><img src="/images/img2.jpg" alt=""></a>
            <a href="javascript:;"><img src="/images/img1.jpg" alt=""></a>
        </div>
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
</x-app-layout>