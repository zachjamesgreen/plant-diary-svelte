{#if nav}
  <aside transition:slide class="absolute bg-white top-14 z-40 w-1/4 h-96">
    <p>Nav coming soon</p>
  </aside>
{/if}

<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  export let nav:boolean;
</script>