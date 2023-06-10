import { derived, readonly, writable } from 'svelte/store'

export interface KeyState {
    [key: string]: boolean
}

export const keyState = writable<KeyState>({})

export const pressedCount = readonly(
    derived(keyState, (state) => Object.values(state).filter(Boolean).length),
)
