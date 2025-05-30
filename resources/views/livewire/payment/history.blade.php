{{-- resources/views/livewire/payment/history.blade.php --}}
@extends('layouts.app')

@section('title', '付款記錄')

@section('content')
<div class="container px-4 py-8 mx-auto">
    @livewire('payment-history-component')
</div>
@endsection
