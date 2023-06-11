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

    const clear = () => keyState.set({})

    let countValue: number

    pressedCount.subscribe((value) => {
        countValue = value
    })
</script>

<svelte:window on:keydown={keydown} on:keyup={keyup} />

<main class="page">
    <h1>Keyboard tester</h1>
    <p>Type on your keyboard to see the keys light up on the screen</p>
    <textarea />
    <button on:click={clear}>clear</button>
    <Keyboard />

    <div>
        <p>
            <span>
                {countValue}
            </span>
            key{#if countValue !== 1}
                s
            {/if}
            simultaneously pressed
        </p>
    </div>
</main>

<style>
    main {
        min-height: 100vh;
    }
</style>
