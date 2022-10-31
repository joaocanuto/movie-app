<script>
    export let movie;
</script>

<div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img  src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}/></figure>
    <div class="card-body">
      <h2 class="card-title">{movie.title}</h2>
      <p></p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => {
            window.location.href='/movie/' + movie.id;
        }}>See More</button>
      </div>
    </div>
  </div>
  
<style>
     img{
        width: 90%;

        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    } 
    h2{
        font-size: 0.8rem;
    }
    .description{
        height: 5vh;
    }
    p{
        font-size: 0.7rem;
    }
    .movie-card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0rem;
    }

</style>