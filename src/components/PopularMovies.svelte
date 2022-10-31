<script>
    export let listMovies;
    import MovieCard from "./MovieCard.svelte";
</script>

<div class="navbar bg-primary text-primary-content">
    <a class="btn btn-ghost normal-case text-xl">Popular Movies</a>
</div>

<div class="popular-movies">
    {#each listMovies as movie}
        <MovieCard {movie}/>
    {/each}
</div>


<style>
    h3{
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
        grid-column-gap: 0rem;
        grid-row-gap: 2rem;
        padding: 2%;
    }
</style>