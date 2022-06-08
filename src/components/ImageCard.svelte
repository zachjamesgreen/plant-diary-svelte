<div class="relative">
  <a href="{link}">
    <img class="hover:opacity-50 hover:ease-in duration-150" src="test1.jpg" alt="Plants">
  </a>
  <div class="absolute bottom-0 left-0 w-full text-white bg-black/50 text-center">
    <p class="text-xs">August 16, 2022</p>
    <p class="text-lg">{card.title}</p>
  </div>
</div>

<script lang="ts">
  import type { IImageCard } from "../objects/post_card";
  export let card:IImageCard
  let link = `/post/${card.slug}`;
</script>

<style>

</style>