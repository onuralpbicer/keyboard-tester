export interface KeyboardKey {
    code: string
    display?: string
    u?: number
    v?: number
}

export const keys: (KeyboardKey | string)[][] = [
    [
        {
            code: 'Escape',
            display: 'esc',
        },
        { code: 'gap' },
        {
            code: 'F1',
        },
        {
            code: 'F2',
        },
        {
            code: 'F3',
        },
        {
            code: 'F4',
        },
        { code: 'gap', u: 0.5 },
        {
            code: 'F5',
        },
        {
            code: 'F6',
        },
        {
            code: 'F7',
        },
        {
            code: 'F8',
        },
        { code: 'gap', u: 0.5 },
        {
            code: 'F9',
        },
        {
            code: 'F10',
        },
        {
            code: 'F11',
        },
        {
            code: 'F12',
        },
    ],
    [
        {
            code: 'Backquote',
            display: '~',
        },
        {
            code: 'Digit1',
            display: '1',
        },
        {
            code: 'Digit2',
            display: '2',
        },
        {
            code: 'Digit3',
            display: '3',
        },
        {
            code: 'Digit4',
            display: '4',
        },
        {
            code: 'Digit5',
            display: '5',
        },
        {
            code: 'Digit6',
            display: '6',
        },
        {
            code: 'Digit7',
            display: '7',
        },
        {
            code: 'Digit8',
            display: '8',
        },
        {
            code: 'Digit9',
            display: '9',
        },
        {
            code: 'Digit0',
            display: '0',
        },
        {
            code: 'Minus',
            display: '-',
        },
        {
            code: 'Equal',
            display: '=',
        },
        {
            code: 'Backspace',
            u: 2,
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'Insert',
            display: 'ins',
        },
        {
            code: 'Home',
            display: 'home',
        },
        {
            code: 'PageUp',
            display: 'pgup',
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'NumLock',
            display: 'num',
        },
        {
            code: 'NumpadDivide',
            display: '/',
        },
        {
            code: 'NumpadMultiply',
            display: '*',
        },
        {
            code: 'NumpadSubtract',
            display: '-',
        },
    ],
    [
        {
            code: 'Tab',
            display: 'tab',
            u: 1.5,
        },
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        {
            code: 'BracketLeft',
            display: '[',
        },
        {
            code: 'BracketRight',
            display: ']',
        },
        {
            code: 'Backslash',
            display: '\\',
            u: 1.5,
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'Delete',
            display: 'del',
        },
        {
            code: 'End',
            display: 'end',
        },
        {
            code: 'PageDown',
            display: 'pgdn',
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'Numpad7',
            display: '7',
        },
        {
            code: 'Numpad8',
            display: '8',
        },
        {
            code: 'Numpad9',
            display: '9',
        },
        {
            code: 'NumpadEnter',
            display: '+',
            v: 2,
        },
    ],
    [
        {
            code: 'CapsLock',
            display: 'caps',
            u: 1.75,
        },
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        {
            code: 'Semicolon',
            display: ';',
        },
        {
            code: 'Quote',
            display: "'",
        },
        {
            code: 'Enter',
            display: 'enter',
            u: 2.25,
        },
        {
            code: 'gap',
            u: 4,
        },
        {
            code: 'Numpad4',
            display: '4',
        },
        {
            code: 'Numpad5',
            display: '5',
        },
        {
            code: 'Numpad6',
            display: '6',
        },
    ],
    [
        {
            code: 'ShiftLeft',
            display: 'shift',
            u: 2.25,
        },
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        {
            code: 'Comma',
            display: ',',
        },
        {
            code: 'Period',
            display: '.',
        },
        {
            code: 'Slash',
            display: '/',
        },
        {
            code: 'ShiftRight',
            display: 'shift',
            u: 2.75,
        },
        {
            code: 'gap',
            u: 1.5,
        },
        {
            code: 'ArrowUp',
            display: '^',
        },
        {
            code: 'gap',
            u: 1.5,
        },
        {
            code: 'Numpad1',
            display: '1',
        },
        {
            code: 'Numpad2',
            display: '2',
        },
        {
            code: 'Numpad3',
            display: '3',
        },
        {
            code: 'NumpadEnter',
            display: 'enter',
            v: 2,
        },
    ],
    [
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'Space',
            display: 'space',
            u: 6.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'blank',
            display: '.',
            u: 1.25,
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'ArrowLeft',
            display: '<',
        },
        {
            code: 'ArrowDown',
            display: '.',
        },
        {
            code: 'ArrowRight',
            display: '>',
        },
        {
            code: 'gap',
            u: 0.5,
        },
        {
            code: 'Numpad0',
            display: '0',
            u: 2,
        },
        {
            code: 'NumpadDecimal',
            display: '.',
        },
    ],
]
