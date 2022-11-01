import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
  let api = `
          https://api.themoviedb.org/3/movie/${params.movie}?api_key=6dc03fe0c37d258befe025cda87bda81&language=en-US
            `
  const res = await fetch(api);
  const data = await res.json();
  if(res.ok){
    return data
  }
  throw error(404, 'Not found');
}
