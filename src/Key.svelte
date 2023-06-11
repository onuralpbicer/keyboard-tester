<script lang="ts">
    import { derived, readonly } from 'svelte/store'
    import type { KeyboardKey } from './keys'
    import { keyState } from './store'

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

    const pressedStore = readonly(
        derived(keyState, (state) => state[keyObj.code]),
    )

    let pressed
    let touched

    pressedStore.subscribe((value) => {
        pressed = value
        touched = value !== undefined
    })
</script>

<div
    data-isgap={keyObj.code === 'gap'}
    style:--u={keyObj.u}
    style:--row={rowIndex === 0 ? 0 : rowIndex + 1}
    style:--v={keyObj.v}
    data-pressed={pressed}
    data-touched={touched}
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

        /* background: green; */
        margin: 2px;
        border: 1px solid var(--palette2);
        border-radius: 4px;
    }

    div[data-isgap='true'] {
        background: transparent;
        border-width: 0;
    }

    div[data-touched='true'] {
        /* background: yellow; */
        border-color: var(--palette4);
    }

    div[data-pressed='true'] {
        /* background: red; */
        border-color: var(--palette3);
        /* background-color: var(--palette3); */
    }
</style>
