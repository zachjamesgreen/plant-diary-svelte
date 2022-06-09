<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {#each $cards as card}
    <ImageCard card={card}/>
  {/each}
</div>

<script>
  import ImageCard from "./ImageCard.svelte";
  import { cards } from "../store.js"

</script>