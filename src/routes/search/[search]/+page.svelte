<script>
    export let data;
	import PopularMovies from '../../../components/PopularMovies.svelte';
    import { each } from 'svelte/internal';
    /** @type {import('./$types').PageData} */
    $:content = Object.keys(data).map(key => data[key]);
    
</script>

 <PopularMovies listMovies={content}/>

<style>

</style>