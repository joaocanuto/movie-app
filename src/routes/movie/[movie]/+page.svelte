<script>


  /** @type {import('./$types').PageData} */


  export let data;
  
</script>

<div class="movie-details">
  <div class="img-container">
    <a href={'https://image.tmdb.org/t/p/original' + data.backdrop_path}>
    <img src={'https://image.tmdb.org/t/p/original' + data.backdrop_path} alt={data.original_title}/>
    </a>
  </div>
  <div class="txt-container">
    <h1>{data.original_title}</h1>
    <p class="overview">{data.overview}</p>
    <p>
      <span>Release data:</span>
      {data.release_date} <br />
      <span>Budget:</span> ${data.budget} <br />
      <span>Rating:</span>
      {data.vote_avarage} <br />
      <span>Runtime:</span>
      {data.runtime}mins <br />
    </p>
  </div>
</div>

<style>
  h1 {
    padding: 1rem 0rem 2rem;
  }
  p {
    padding: 1rem 0rem;
  }
  .img-contaier{
    width: 100%;
    border-radius: 1rem;
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
  .movie-details {
    margin: 2rem 20%;
  }
  span{
    font-weight: bold;
  }
</style>