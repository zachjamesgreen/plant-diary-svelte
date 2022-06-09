<script context="module" lang="ts">
  import ImageCards from "../components/ImageCards.svelte";
  import { apiCards, cards } from "../store.js"

  export async function load({ params, fetch }) {
    // fetch("https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-228d11dd-0a8c-4418-99f7-a3d2a95cfb7f/plant_diary/getImageCards")
    let a = await fetch("https://starfish-app-8iujy.ondigitalocean.app/plant_diary/getImageCards")
    .then(res => res.json())
    .then(data => apiCards.set(data));
    return {
      props: {},
    }
  }
</script>

<ImageCards />
