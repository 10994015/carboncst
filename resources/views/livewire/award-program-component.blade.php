<div id="awardprogram-page">
    <section class="awardprogram">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>歷年獲獎名單</h2>
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th>年度</th>
                        <th>獎項名稱</th>
                        <th>獲獎者及抬頭</th>
                        <th>服務單位</th>
                        <th>檔案下載</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($awards as $award)
                    <tr>
                        <td>{{$award->year}}</td>
                        <td>{{$award->award_name}}</td>
                        <td>{{$award->name}}</td>
                        <td>
                            <a href="{{$award->link}}" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>{{$award->units}}
                            </a>
                        </td>
                        <td><a href="{{$award->file}}" target="_blank" download>{{$award->file_name}}</a></td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</div>