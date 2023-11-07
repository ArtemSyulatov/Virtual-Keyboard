const textArea = document.createElement('textarea')
textArea.setAttribute('disabled', 'true')
textArea.setAttribute('id', 'textarea')
document.body.append(textArea)

function idsForKeys() {
    const keyCodesForHighLight = ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
        'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
        'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
    ]
    const buttons = document.querySelectorAll('.button')
    buttons.forEach((elem, index) => {
        keyCodesForHighLight.forEach((e, i) => {
            if (index === i) {
                elem.id = e
            }
        })
    })
}
let caps = false
let langRu = true
let dbClickShift = false
const characters = {
    english: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    russian: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
        ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    shiftArrRu: [
        ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
        ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    shiftArrEn: [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
        ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ]
};

const keyCodes = {
    'KeyF': {
        'ru': 'А',
        'eng': 'F'
    },
    'KeyA': {
        'ru': 'Ф',
        'eng': 'A'
    },
    'KeyS': {
        'ru': 'Ы',
        'eng': 'S'
    },
    'KeyG': {
        'ru': 'П',
        'eng': 'G'
    },
    'KeyH': {
        'ru': 'Р',
        'eng': 'H'
    },
    'KeyJ': {
        'ru': 'О',
        'eng': 'J'
    },
    'KeyK': {
        'ru': 'Л',
        'eng': 'K'
    },
    'KeyL': {
        'ru': 'Д',
        'eng': 'L'
    },
    'KeyQ': {
        'ru': 'Й',
        'eng': 'Q'
    },
    'KeyE': {
        'ru': 'У',
        'eng': 'E'
    },
    'KeyR': {
        'ru': 'Ц',
        'eng': 'W'
    },
    'KeyD': {
        'ru': 'В',
        'eng': 'D'
    },
    'KeyT': {
        'ru': 'Е',
        'eng': 'T'
    },
    'KeyY': {
        'ru': 'Н',
        'eng': 'Y'
    },
    'KeyU': {
        'ru': 'Г',
        'eng': 'U'
    },
    'KeyI': {
        'ru': 'Ш',
        'eng': 'I'
    },
    'KeyO': {
        'ru': 'Щ',
        'eng': 'O'
    },
    'KeyP': {
        'ru': 'З',
        'eng': 'P'
    },
    'KeyZ': {
        'ru': 'Я',
        'eng': 'Z'
    },
    'KeyX': {
        'ru': 'Ч',
        'eng': 'X'
    },
    'KeyC': {
        'ru': 'С',
        'eng': 'C'
    },
    'KeyV': {
        'ru': 'М',
        'eng': 'V'
    },
    'KeyB': {
        'ru': 'И',
        'eng': 'B'
    },
    'KeyN': {
        'ru': 'Т',
        'eng': 'N'
    },
    'KeyM': {
        'ru': 'Ь',
        'eng': 'M'
    },
    'KeyW': {
        'ru': 'Ц',
        'eng': 'W'
    },
    'Digit1': {
        'ru': '1',
        'eng': '1'
    },
    'Digit2': {
        'ru': '2',
        'eng': '2'
    },
    'Digit3': {
        'ru': '3',
        'eng': '3'
    },
    'Digit4': {
        'ru': '4',
        'eng': '4'
    },
    'Digit5': {
        'ru': '5',
        'eng': '5'
    },
    'Digit6': {
        'ru': '6',
        'eng': '6'
    },
    'Digit7': {
        'ru': '7',
        'eng': '7'
    },
    'Digit8': {
        'ru': '8',
        'eng': '8'
    },
    'Digit9': {
        'ru': '9',
        'eng': '9'
    },
    'Digit0': {
        'ru': '0',
        'eng': '0'
    },
    'Escape': {
        'ru': 'ё',
        'eng': '`'
    },
    'Tab': {
        'ru': '\t',
        'eng': '\t'
    },
    'Minus': {
        'ru': '-',
        'eng': '-'
    },
    'Equal': {
        'ru': '=',
        'eng': '='
    },
    'BracketRight': {
        'ru': 'ъ',
        'eng': ']'
    },
    'BracketLeft': {
        'ru': 'х',
        'eng': '['
    },
    'Semicolon': {
        'ru': 'ж',
        'eng': ';'
    },
    'Quote': {
        'ru': 'э',
        'eng': '"'
    },
    'Comma': {
        'ru': 'б',
        'eng': ','
    },
    'Period': {
        'ru': 'ю',
        'eng': '.'
    },
    'Slash': {
        'ru': '.',
        'eng': '/'
    },
    'Enter': {
        'ru': '\n',
        'eng': '\n'
    },
    'Backquote': {
        'ru': 'ё',
        'eng': '`'
    },
    'ControlLeft': {
        'ru': '',
        'eng': ''
    },
}

function paintButtons(arr) {
    const buttonsDiv = document.createElement('div')
    buttonsDiv.setAttribute('id', 'buttons')
    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement('div')
        row.setAttribute('id', 'row')
        for (let j = 0; j < arr[i].length; j++) {
            const button = document.createElement('button')
            button.setAttribute('class', 'button')
            button.innerHTML = arr[i][j]
            if (caps === true && arr[i][j] !== 'Tab' && arr[i][j] !== 'CapsLock' && arr[i][j] !== 'Shift' && arr[i][j] !== 'Delete'
                && arr[i][j] !== 'Ctrl' && arr[i][j] !== 'Alt' && arr[i][j] !== 'Space' && arr[i][j] !== 'Enter') {
                button.innerHTML = arr[i][j].toUpperCase()
            }
            if (arr[i][j] === 'CapsLock') {
                button.classList.add('caps')
            }
            if (arr[i][j] === 'Shift') {
                button.classList.add('shift')
            }
            if (arr[i][j] === '\\') {
                button.classList.add('slash')
            }
            if (arr[i][j] === '▲') {
                button.classList.add('ArrowUp')
            }
            if (arr[i][j] === 'Ctrl') {
                button.classList.add('Ctrl')
            }
            if (arr[i][j] === 'Enter') {
                button.classList.add('Enter')
            }
            if (arr[i][j] === 'Delete') {
                button.classList.add('Delete')
            }
            row.append(button)
            if (button.innerHTML === 'Space') {
                button.style.minWidth = '285px'
            }
            button.addEventListener('click', () => {
                if (button.innerHTML === 'Tab') {
                    textArea.innerHTML += '\t'
                    return
                }
                if (button.innerHTML === 'Shift') {
                    return
                }
                if (button.innerHTML === 'Enter') {
                    textArea.innerHTML += '\n'
                    return
                }
                if (button.innerHTML === 'Space') {
                    textArea.innerHTML += ' '
                    return
                }
                if (button.innerHTML === 'Delete') {
                    textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1)
                    return
                }
                if (button.innerHTML === 'Ctrl') {
                    return
                }
                if (button.innerHTML === 'Alt') {
                    return
                }
                if (button.innerHTML === 'Fn') {
                    return
                }
                if (button.innerHTML === 'CapsLock') {
                    caps = !caps
                    document.getElementById('buttons')?.remove()
                    if (langRu === true) {
                        paintButtons(characters.russian)
                    } else {
                        paintButtons(characters.english)
                    }
                    return;
                }
                textArea.innerHTML += button.innerHTML
            })
            button.addEventListener('dblclick', () => {
                if (button.innerHTML === 'Shift') {
                    if (dbClickShift) {
                        dbClickShift = !dbClickShift
                        document.getElementById('buttons')?.remove()
                        if (langRu === true) {
                            paintButtons(characters.russian)
                        } else {
                            paintButtons(characters.english)
                        }
                        return
                    }
                    dbClickShift = !dbClickShift
                    document.getElementById('buttons')?.remove()
                    if (langRu === true) {
                        paintButtons(characters.shiftArrRu)
                    } else {
                        paintButtons(characters.shiftArrEn)
                    }
                }
            })
            button.addEventListener('mousedown', () => {
                button.classList.add('highlight')
            })
            button.addEventListener('mouseup', () => {
                button.classList.remove('highlight')
            })
        }
        buttonsDiv.appendChild(row)
    }
    document.body.append(buttonsDiv)
    idsForKeys()
}

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });
    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });
}

function useLang() {
    document.getElementById('buttons')?.remove()
    if (!langRu) {
        langRu = true
        paintButtons(characters.russian)
    } else {
        langRu = false
        paintButtons(characters.english)
    }
}

runOnKeys(
    () => useLang(),
    "ControlLeft",
    "AltLeft"
);
document.addEventListener('DOMContentLoaded', () => {
    langRu = true;
    paintButtons(characters.russian)
    idsForKeys()
})
let down = false

document.addEventListener('keydown', (event) => {
    console.log(event.code)
    const regexRu = /[а-яА-ЯёЁ]/
    if (!regexRu.test(event.key)) {
        document.getElementById('buttons')?.remove()
        langRu = false
        paintButtons(characters.english)
    } else {
        document.getElementById('buttons')?.remove()
        langRu = true
        paintButtons(characters.russian)
    }
    const buttons = document.querySelectorAll('.button')
    for (let button of buttons) {
        if (button.id === event.code) {
            console.log(button.id)
            button.classList.add('highlight')
        }
    }
    switch (event.key) {
        case '!' :
            textArea.innerHTML += '!'
            return;
        case '@' :
            textArea.innerHTML += '@'
            return;
        case '#' :
            textArea.innerHTML += '#'
            return;
        case '$' :
            textArea.innerHTML += '$'
            return;
        case '%' :
            textArea.innerHTML += '%'
            return;
        case '^' :
            textArea.innerHTML += '^'
            return;
        case '&' :
            textArea.innerHTML += '&'
            return;
        case '*' :
            textArea.innerHTML += '*'
            return;
        case '(' :
            textArea.innerHTML += '('
            return;
        case ')' :
            textArea.innerHTML += ')'
            return;
        case '_' :
            textArea.innerHTML += '_'
            return;
        case '+' :
            textArea.innerHTML += '+'
            return;
        case '~' :
            textArea.innerHTML += '~'
            return;
        case 'Alt':
            return;
    }
    if (event.code === 'ArrowUp') {
        textArea.innerHTML += '▲'
        return;
    }
    if (event.code === 'ArrowRight') {
        textArea.innerHTML += '►'
        return;
    }
    if (event.code === 'ArrowDown') {
        textArea.innerHTML += '▼'
        return;
    }
    if (event.code === 'ArrowLeft') {
        textArea.innerHTML += '◄'
        return;
    }
    if (event.code === 'Space') {
        textArea.innerHTML += ' '
        return;
    }
    if (event.code === 'CapsLock') {
        caps = !caps
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.russian)
        } else {
            paintButtons(characters.english)
        }
        return;
    }
    if (event.key === 'Shift') {
        if (down) return
        down = true
        caps = true
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.shiftArrRu)
        } else {
            paintButtons(characters.shiftArrEn)
        }
        return;
    }
    if (event.code === 'Backspace') {
        textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1)
        return;
    }
    if (!caps) {
        if (langRu) {
            textArea.innerHTML += keyCodes[event.code]['ru'].toLowerCase()
            return
        }
        textArea.innerHTML += keyCodes[event.code]['eng'].toLowerCase()
        return;
    }
    if (langRu) {
        textArea.innerHTML += keyCodes[event.code]['ru']
        return
    }
    textArea.innerHTML += keyCodes[event.code]['eng']

}, false)

document.addEventListener('keyup', (event) => {
    const buttons = document.querySelectorAll('.button')
    for (let button of buttons) {
        if (button.id === event.code) {
            button.classList.remove('highlight')
        }
    }
    if (event.key === 'Shift') {
        down = false
        caps = false
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.russian)
        } else {
            paintButtons(characters.english)
        }
    }
}, false)

