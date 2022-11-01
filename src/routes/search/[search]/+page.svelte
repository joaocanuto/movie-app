<script>
	import PopularMovies from '../../../components/PopularMovies.svelte';
    import { each } from 'svelte/internal';
    /** @type {import('./$types').PageData} */

    export let data;

</script>

<PopularMovies listMovies={data}/>

<style>

</style>