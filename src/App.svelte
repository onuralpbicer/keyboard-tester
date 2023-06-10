<script lang="ts">
    import Keyboard from './Keyboard.svelte'
    import { keyState, pressedCount } from './store'

    const keydown: svelte.JSX.KeyboardEventHandler<Window> = (event) => {
        keyState.update((state) => {
            state[event.code] = true
            return state
        })
    }

    const keyup: svelte.JSX.KeyboardEventHandler<Window> = (event) => {
        keyState.update((state) => {
            state[event.code] = false
            return state
        })
    }

    let countValue: number

    pressedCount.subscribe((value) => {
        countValue = value
    })
</script>

<svelte:window on:keydown={keydown} on:keyup={keyup} />

<main class="page">
    <Keyboard />

    <div>
        {countValue}
    </div>
</main>

<style>
    main {
        min-height: 100vh;
    }
</style>
