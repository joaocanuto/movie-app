import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const movies = derived(apiData, ($apiData) =>{
    if($apiData){
        return $apiData
    }
    return [];
})