<script>
  import ImageCard from "./ImageCard.svelte";
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {#each count as i}
    <ImageCard id={i}/>
  {/each}
</div>