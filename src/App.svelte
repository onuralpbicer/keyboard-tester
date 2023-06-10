<script lang="ts">
  import Keyboard from "./Keyboard.svelte";

  const keydown: svelte.JSX.KeyboardEventHandler<Window> = (event) => {
    console.log(event);
  };
</script>

<svelte:window on:keydown={keydown} />

<main class="page">
  <Keyboard />
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
