<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<script>
    window.app_url = '{{url('/')}}';
</script>
<!-- Scripts -->
@include('layouts.admin-lite.includes.head')
<body class="sidebar-mini skin-blue">
         <div id="app">
           <app-home></app-home>
          </div>
<script src="{{ asset('js/app.js') }}" defer></script>
@include('layouts.admin-lite.scripts.scripts')
</body>
</html>

