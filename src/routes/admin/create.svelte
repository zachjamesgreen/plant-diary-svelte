<div class="m-4">
  <div class="grid grid-cols-4 h-screen">
    <div class="flex flex-col">
      <h1>Create a post</h1>

      <div class="flex flex-col">
        <label for="title">Title of Post</label>
        <input type="text" placeholder="Title" id="title" class="border" bind:value={title}>
      </div>

      <div class="flex flex-col">
        <label for="slug">Slug of Post</label>
        <input type="text" placeholder="Slug" id="slug" class="border" bind:value={slug}>
      </div>

      <div class="flex flex-col">
        <label for="image">Cover Image</label>
        <input type="file" id="image" accept="image/png, image/jpeg" class="border" bind:files="{coverImage}">
      </div>

      <div>
        <label for="publish" class="border">
          <input type="checkbox" id="publish" bind:checked="{published}">
          Publish?
        </label>
      </div>

      <div>
        <button class="border" on:click="{addImage}">Insert Image</button>
        <button class="border" on:click="{() => preview = !preview}">{previewBtnText}</button>
        <button class="border" on:click="{submitPost}">Submit</button>
      </div>
      
    </div>
    <div class="h-3/4 col-start-2 col-span-2 p-4">
      {#if preview}
        <div id="preview" class="w-full h-full p-4 border">{@html Marked.parse(source)}</div>
      {:else}
        <textarea name="body" id="source-body" bind:value={source} class="w-full h-full p-4"></textarea>
      {/if}
    </div>

    <div class="col-start-4">
      Right Column
    </div>
  </div>

  <input type="file" id="inline-image" accept="image/png, image/jpeg" bind:files bind:this={inlineImage} hidden>
</div>

<script lang="ts">
  import { Marked } from '@ts-stack/markdown';
  // const url = 'http://localhost:8080'
  const url = 'https://zjg-plant-diary.herokuapp.com'
  let inlineImage: HTMLInputElement
  let files: FileList
  let coverImage: FileList
  let published = false
  let preview = false
  let title = ''

  $: slug = title.toLowerCase().replace(/\s+/g, '-')

  $: previewBtnText = preview ? 'Edit' : 'Preview'

  $: if (files) {
    uplaodInlinePhoto()
    inlineImage.value = ''
  }
  function addImage(e: Event) {
    inlineImage.click()
  }

  function submitPost(event: Event) {
    event.preventDefault()
    let formData = new FormData()
    formData.append('title', title)
    formData.append('body', source)
    formData.append('slug', slug)
    formData.append('coverImageFile', coverImage[0])
    formData.append('published', published.toString())
    fetch(`${url}/post`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      let u = "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-228d11dd-0a8c-4418-99f7-a3d2a95cfb7f/plant_diary/savePost"
      console.log(`${u}?${new URLSearchParams(res)}`)
      // fetch(`${u}?${new URLSearchParams(res)}`)
      // .then(res => console.log(res.json()))
      
    })

  }

  let source = `__strong__
# Heading
## h2 heading
`;

  function uplaodInlinePhoto() {
    const file = files[0]
    let formdata = new FormData()
    formdata.append('fileName', file.name)
    formdata.append('fileSize', file.size.toString())
    formdata.append('fileType', file.type)
    formdata.append('file', file)
    let options = {
        method: 'POST',
        cors: 'no-cors',
        body: formdata,
      }
    fetch(`${url}/upload_image`, options)
      .then(res => res.json())
      .then(json => {
        source += `![${file.name}](${json.url})`
      })
  }
</script>