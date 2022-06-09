<div class="relative">
  <a href="{link}">
    <img class="hover:opacity-50 hover:ease-in duration-150 object-fill w-[100vw] sm:w-[50vw] lg:w-[33vw] h-[100vw] sm:h-[50vw] lg:h-[33vw]" src="{card.cover_image}" alt="Plants">
  </a>
  <div class="absolute bottom-0 left-0 w-full text-white bg-black/50 text-center">
    <p class="text-xs">August 16, 2022</p>
    <p class="text-lg">{card.title}</p>
  </div>
</div>

<script lang="ts">
  import type { IImageCard } from "../interfaces";
  export let card:IImageCard
  let link = `/post/${card.slug}`;
</script>

<style>

</style>