import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  let api = `https://api.themoviedb.org/3/search/movie?api_key=6dc03fe0c37d258befe025cda87bda81&language=en-US&query=${params.search}&page=1&include_adult=false`
  const res = await fetch(api);
  const data = await res.json();
  if(res.ok){
    return data.results
  }
  throw error(404, 'Not found');
}
