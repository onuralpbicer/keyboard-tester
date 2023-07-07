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
    const pageBlur: svelte.JSX.FocusEventHandler<Window> = () => {
        keyState.update((state) => {
            Object.keys(state).forEach((key) => {
                state[key] = false
            })
            return state
        })
    }

    const clear = () => keyState.set({})

    let countValue: number

    pressedCount.subscribe((value) => {
        countValue = value
    })
</script>

<svelte:window
    on:keydown|preventDefault={keydown}
    on:keyup|preventDefault={keyup}
    on:blur={pageBlur}
/>

<main class="page">
    <h1>Keyboard tester</h1>

    <section>
        <p>Type on your keyboard to see the keys light up on the screen</p>
        <textarea />
        <button on:click={clear}>clear</button>
    </section>

    <section>
        <Keyboard />

        <div class="keycount-container">
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
    </section>
</main>

<style>
    h1 {
        text-transform: capitalize;
        color: var(--palette3);
        font-size: 3rem;
        text-align: center;
    }

    section {
        margin: 2rem auto;
        max-width: 80%;
    }

    main {
        min-height: 100vh;
    }

    div.keycount-container {
        margin-top: 1rem;
    }
</style>
