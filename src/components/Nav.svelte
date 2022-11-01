<script>
    import SearchMovies from '../components/SearchMovies.svelte'
</script>
  
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">Popular Movies</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <SearchMovies/>
      </div>
    </div>
  </div>