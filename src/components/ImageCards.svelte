<script lang="ts">
  import ImageCard from "./ImageCard.svelte";
  import { onMount } from "svelte";
  import { apiCards, cards } from "../store.js"
  console.log(process.env.GET_IMAGE_CARDS)
  
  onMount(async () => {
    // fetch("https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-228d11dd-0a8c-4418-99f7-a3d2a95cfb7f/plant_diary/getImageCards")
    fetch("https://starfish-app-8iujy.ondigitalocean.app/plant_diary/getImageCards")
    .then(res => res.json())
    .then(data => apiCards.set(data));
  })

</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {#each $cards as card}
    <ImageCard card={card}/>
  {/each}
</div>