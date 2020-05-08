<script context="module">
  export async function preload(page, session) {
    return { flContent: session.flContent }; //get flContent from session object
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";
  export let flContent; //enable interact as usual prop
  export let segment;

  const arr = [];
  for (let key in flContent) {
    arr.push(flContent[key]);  //flContent is object of objects, needs to be converted to iterable firstly for svelte {#each}
  }
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>

  <ul>
    {#each arr as arrItem}
      <li>
        <h1>{arrItem.tabPaneId}</h1>
        <p>{arrItem.ckEditor}</p>     // example output
      </li>
    {/each}
  </ul>

  <slot />
</main>
