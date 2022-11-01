<script>
    import {goto} from '$app/navigation'
    let inputValue = '';

    function submitSearch(){
        console.log("teste")
        goto('/search/' + inputValue);
    }
</script>

<form on:submit|preventDefault={submitSearch} class= "search">
    <input bind:value={inputValue} name="search_movie" type="text" placeholder="Pesquise pelo filme" class="input input-bordered" />
    <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
</form>
