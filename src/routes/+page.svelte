<script>
  import { onMount } from 'svelte';
  import PopularMovies from '../components/PopularMovies.svelte';
	import { apiData } from '../components/stores';

  onMount( async () => {
    let api = `https://api.themoviedb.org/3/movie/popular?api_key=6dc03fe0c37d258befe025cda87bda81&language=en-US&page=1`
    fetch(api)
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      apiData.set(data.results)
    }).catch(error => {
      console.log(error);
      return [];
    })
    
    // const res = await fetch(api);
    // const data = await res.json();
    // dataApi = data.results
    // apiData.set(data.results);
  });

  // {JSON.stringify(data)}
</script>

<section>
  <PopularMovies listMovies={$apiData}/>
</section>
