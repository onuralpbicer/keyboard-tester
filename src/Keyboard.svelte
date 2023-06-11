<script lang="ts">
    import Key from './Key.svelte'
    import { keys } from './keys'
</script>

<div class="keyboard-container">
    {#each keys as row, rowIndex}
        {#each row as key, colIndex}
            <Key {key} {rowIndex} />
        {/each}
    {/each}
</div>

<style>
    .keyboard-container {
        display: grid;
        /* background-color: rebeccapurple; */
        min-width: 60vw;
        aspect-ratio: 23 / 6.25;

        grid-template-columns: repeat(calc(23 * var(--one-u)), 1fr);
        grid-template-rows: 1fr 0.5rem repeat(5, 1fr);
    }
</style>
