<script context="module" lang="ts">
  export let slug:Number = 0;
  export async function load({ params, fetch, session, stuff }) {
    let url = `https://jsonplaceholder.typicode.com/posts/${params.slug}`
    return {
      props: {
        slug: params.slug,
        post: await fetch(url).then(res => res.json())
      },
    }
  }
</script>

<div class="grid grid-cols-8 gap-6">
  <div class="col-span-6 col-start-2">
    <h1 class="font-title text-3xl my-4">{post.title}</h1>
    <div class="mb-6 text-sm">
      <p>Created On: August 16, 2022</p>
      <p>Updated On: August 16, 2022</p>
    </div>
  </div>
  <div class="col-span-8 lg:col-span-6 lg:col-start-2"><img src="../test1.jpg" alt="Plants"></div>
  <div class="col-span-6 col-start-2">
    <p>{post.body}</p>
  </div>
</div>

<script lang="ts">
  export let slug:Number;
  export let post:Object;
</script>