{#if search}
  <div transition:slide class="absolute top-14 left-0 right-0 flex justify-between bg-white z-50 h-14 items-center">
    <div class="mx-6 my-1"><img class="icon" id="search" src="../search.svg" alt="Search"></div>
    <div class="grow"><input type="text" placeholder="Search" class="border h-14 w-full placeholder:italic placeholder:text-2xl text-2xl px-2"></div>
    <div class="bg-slate-200 h-full items-center">
      <button class="text-2xl mx-6 my-1" type="submit">Search</button>
    </div>
  </div>
{/if}

<script lang="ts">
  import { slide } from 'svelte/transition';
  export let search:boolean;
</script>