<script context="module" lang="ts">
  import { Post } from "../../interfaces"

  export async function load({ params, fetch}) {
    // let url = `https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-228d11dd-0a8c-4418-99f7-a3d2a95cfb7f/plant_diary/getPost?slug=${params.slug}`
    let url = `https://starfish-app-8iujy.ondigitalocean.app/plant_diary/getPost?slug=${params.slug}`
    return {
      props: {
        slug: params.slug,
        post: await fetch(url).then((res: Response) => res.json()).then((data: any) => new Post(data))
      },
    }
  }
</script>

<div class="grid grid-cols-8 gap-6">
  <div class="col-span-6 col-start-2">
    <h1 class="font-title text-7xl my-4">{post?.title}</h1>
    <div class="mb-6 text-sm">
      <p>Created On: August 16, 2022</p>
      <p>Updated On: August 16, 2022</p>
    </div>
  </div>
  <div class="col-span-8 lg:col-span-4 lg:col-start-3 flex justify-center"><img src="{post.cover_image}" alt="Plants"></div>
  <div class="col-span-4 col-start-3 prose-lg prose-ol:list-decimal {proseBlockqouteClasses} {proseCodeClasses}" id="markdown-body">
    {@html marked.parse(body, opts)}
  </div>
</div>

<script lang="ts">
  let proseBlockqouteClasses = "prose-blockquote:border-l-8 prose-blockquote:border-slate-200 prose-blockquote:ml-12 prose-blockquote:pr-12"
  let proseCodeClasses = "prose-pre:bg-black prose-code:text-white prose-code:font-code"
  import { marked  } from 'marked';
  import hljs from 'highlight.js';
  export let post: Post
  let body = '';

  const opts = {
    headerIds: false,
    highlight: (code: string, lang: string) => {
      if (lang) {
        return hljs.highlight(code, {language: lang}).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    },
  }


  post.getPostBody().then(b => body = b)
</script>

<style>

</style>