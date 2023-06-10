<script lang="ts">
    import type { KeyboardKey } from './keys'

    export let key: KeyboardKey | string

    const keyObj: KeyboardKey =
        typeof key === 'string'
            ? {
                  code: 'Key' + key.toUpperCase(),
                  display: key,
              }
            : key

    export let rowIndex: number

    const display = keyObj.code === 'gap' ? '' : keyObj.display || keyObj.code
</script>

<div
    data-isgap={keyObj.code === 'gap'}
    style:--u={keyObj.u}
    style:--row={rowIndex === 0 ? 0 : rowIndex + 1}
    style:--v={keyObj.v}
>
    {display}
</div>

<style>
    div {
        grid-column-end: span calc(var(--one-u) * var(--u, 1));
        grid-row-start: calc(var(--row) + 1);
        grid-row-end: span var(--v, 1);

        display: grid;
        place-items: center;

        background: green;
        margin: 2px;
    }

    div[data-isgap='true'] {
        background: transparent;
    }
</style>
