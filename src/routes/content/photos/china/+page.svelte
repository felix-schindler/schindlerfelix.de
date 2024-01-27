<script lang="ts">
  import ImageCollection from "$lib/components/ImageCollection.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const baseImagePath = "/img/photos/china";
</script>

<ImageCollection
  country={{
    name: "China",
    mask: `${baseImagePath}/mask.png`,
    sky: `${baseImagePath}/sky.jpg`,
  }}
  cities={[
    {
      images: data.files.map((f) => `${baseImagePath}/${f}`),
    },
  ]}
>
  <Markdown>
    <h2>Sources</h2>
    <p>
      This is just a placeholder for now, until I start adding pictures.
      Inspiration and pictures by <a href="https://eliasruiz.com/china"
        >Elias Ruiz</a
      >
    </p>
  </Markdown>
</ImageCollection>

<style>
  /* Overwrite */
  :global(.hero-title) {
    font-size: 20vw;
    bottom: 10%;
  }
</style>
