<div class="relative">
  <a href="{link}">
    <img class="hover:opacity-50 hover:ease-in duration-150" src="test1.jpg" alt="Plants">
  </a>
  <div class="absolute bottom-0 left-0 w-full text-white bg-black/50 text-center">
    <p class="text-xs">August 16, 2022</p>
    <p class="text-lg">This is a test on the image photo card</p>
  </div>
</div>

<script lang="ts">
  export let id:number;
  let link = `/post/${id}`;
</script>

<style>

</style>