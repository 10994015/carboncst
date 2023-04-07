<div id="cstdatabase-page">
    <section class="cstdatabase">
        <div class="title">
            <img src="/images/CST Logo.png" alt="臺灣碳材料學會" />
            <h2>碳材資料庫</h2>
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>服務單位</th>
                        <th>職稱</th>
                        <th>研究領域</th>
                        <th>相關連結</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($databases as $database)
                    <tr>
                        <td>{{$database->name}}</td>
                        <td>{{$database->units}}</td>
                        <td>{{$database->job_title}}</td>
                        <td>
                            {{$database->field}}
                        </td>
                        <td>
                            <div class="link-group">
                                @if($database->button_1)
                                <a
                                    href="@if(strtolower($database->button_1)==='email') mailto:{{ $database->link_1}} @else {{ $database->link_1}} @endif">{{$database->button_1}}</a>
                                @endif
                                @if($database->button_2)
                                <a
                                    href="@if(strtolower($database->button_2)==='email') mailto:{{ $database->link_2}} @else {{ $database->link_2}} @endif">{{$database->button_2}}</a>
                                @endif
                                @if($database->button_3)
                                <a
                                    href="@if(strtolower($database->button_3)==='email') mailto:{{ $database->link_3}} @else {{ $database->link_3}} @endif">{{$database->button_3}}</a>
                                @endif
                                @if($database->button_4)
                                <a
                                    href="@if(strtolower($database->button_4)==='email') mailto:{{ $database->link_4}} @else {{ $database->link_4}} @endif">{{$database->button_4}}</a>
                                @endif
                                @if($database->button_5)
                                <a
                                    href="@if(strtolower($database->button_5)==='email') mailto:{{ $database->link_5}} @else {{ $database->link_5}} @endif">{{$database->button_5}}</a>
                                @endif

                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</div>