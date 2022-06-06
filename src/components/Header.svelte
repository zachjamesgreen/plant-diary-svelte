<header class="flex flex-row px-6 py-2 justify-between bg-slate-200 h-14 items-center">
  <div on:click={() => dispatch('nav')}><img class="icon" id="menu" src="../bars.svg" alt="Menu"></div>
  <div>
    <h1 class="text-3xl"><a href="/">Plant Diary</a></h1>
  </div>
  <div on:click={() => dispatch('search')}><img class="icon" id="search" src="../search.svg" alt="Search"></div>
</header>


<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>