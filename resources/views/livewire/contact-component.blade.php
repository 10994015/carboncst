<div id="contact-page">
    <section class="contact">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>聯絡我們</h2>
        </div>
        <div class="content">
            <form wire:submit.prevent="onSubmit">
                <label for="">
                    <p>姓名 Name*</p>
                    <input type="text" required wire:model="name" />
                </label>
                <label for="">
                    <p>電子郵件 Email*</p>
                    <input type="email" required wire:model="email" />
                </label>
                <label for="">
                    <p>留言 Message*</p>
                    <textarea wire:model="message"></textarea>
                </label>
                <label for="" class="captcha_box" wire:ignore>
                    <span id="captcha">{!! captcha_img('flat') !!}</span>
                    <button type="button" class="reload" wire:click='reloadCaptcha'>&#x21bb;</button>
                </label>
                <label for="" class="mt-3">
                    <input type="text" name="captcha" wire:model='captcha' placeholder="請輸入驗證碼..."
                        class="bg-transparent" id="captcha">
                </label>
                <label for="">
                    <button type="submit" wire:loading.remove wire:target='onSubmit'>
                        <span>送出</span>
                    </button>
                    <button type="button" class="disabled" disabled wire:loading.flex wire:target="onSubmit">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </button>
                </label>
            </form>
            @error('captcha') <span class="error">驗證碼錯誤</span> @enderror
            @if(session()->has('success'))
            <span class='alert-success'>{{session('success')}}</span>
            @endif

            @if(session()->has('error'))
            <span class='alert-error'>{{session('error')}}</span>
            @endif
        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js"
        integrity="sha512-LUKzDoJKOLqnxGWWIBM4lzRBlxcva2ZTztO8bTcWPmDSpkErWx0bSP4pdsjNH8kiHAUPaT06UXcb+vOEZH+HpQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        const captcha = document.getElementById('captcha')
        window.addEventListener('isbetedFn', e=>{
            captcha.innerHTML = e.detail.captcha
        })
    </script>
</div>