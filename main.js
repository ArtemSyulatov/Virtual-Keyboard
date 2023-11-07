const textArea = document.createElement('textarea')
textArea.setAttribute('disabled', 'true')
textArea.setAttribute('id', 'textarea')
document.body.append(textArea)
let caps = false
let langRu = true
let dbClickShift = false
const characters = {
    english: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    russian: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
        ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    shiftArrRu: [
        ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
        ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ],
    shiftArrEn: [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
        ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
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
    'Digit1':{
        'ru': '1',
        'eng': '1'
    },
    'Digit2':{
        'ru': '2',
        'eng': '2'
    },
    'Digit3':{
        'ru': '3',
        'eng': '3'
    },
    'Digit4':{
        'ru': '4',
        'eng': '4'
    },
    'Digit5':{
        'ru': '5',
        'eng': '5'
    },
    'Digit6':{
        'ru': '6',
        'eng': '6'
    },
    'Digit7':{
        'ru': '7',
        'eng': '7'
    },
    'Digit8':{
        'ru': '8',
        'eng': '8'
    },
    'Digit9':{
        'ru': '9',
        'eng': '9'
    },
    'Digit0':{
        'ru': '0',
        'eng': '0'
    }

}


function paintButtons(arr) {
    const buttonsDiv = document.createElement('div')
    buttonsDiv.setAttribute('id', 'buttons')
    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement('div')
        row.setAttribute('id', 'row')
        for (let j = 0; j < arr[i].length; j++) {
            const button = document.createElement('button')
            button.setAttribute('id', 'button')
            button.innerHTML = arr[i][j]
            if (caps === true && arr[i][j] !== 'Tab' && arr[i][j] !== 'Caps Lock' && arr[i][j] !== 'Shift' && arr[i][j] !== 'Delete'
                && arr[i][j] !== 'Ctrl' && arr[i][j] !== 'Alt' && arr[i][j] !== 'Space' && arr[i][j] !== 'Enter') {
                button.innerHTML = arr[i][j].toUpperCase()
            }
            if (arr[i][j] === 'Caps Lock') {
                button.classList.add('caps')
            }
            if (arr[i][j] === 'Shift') {
                button.classList.add('shift')
            }
            row.append(button)
            if (button.innerHTML === 'Space') {
                button.style.minWidth = '285px'
            }
            button.addEventListener('click', (e) => {
                if (button.innerHTML === 'Tab') {
                    textArea.innerHTML += '\t'
                    return
                }
                if (button.innerHTML === 'Shift') {
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
                if (button.innerHTML === 'Caps Lock') {
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
        }
        buttonsDiv.appendChild(row)
    }
    document.body.append(buttonsDiv)
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
    "ShiftLeft",
    "AltLeft"
);
document.addEventListener('DOMContentLoaded', () => {
    langRu = true;
    paintButtons(characters.russian)
})

let down = false
document.addEventListener('keydown', (event) => {
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
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.shiftArrRu)
        } else {
            paintButtons(characters.shiftArrEn)
        }
        return;
    }
    console.log(event.code)
    if (event.code === 'Backspace') {
        textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1)
    }
    if (event.key !== 'Shift' && event.code !== 'Backspace' && event.key !== 'Alt'
        && event.key !== 'Control' && event.code !== 'Delete' && event.code !== 'Insert' && event.code !== 'End' && event.code !== 'Home'
        && event.code !== 'PageUp' && event.code !== 'PageDown' && event.code !== 'ScrollLock' && event.code !== 'Pause' && event.code !== 'Pause'
        && event.code !== 'F1' && event.code !== 'F2' && event.code !== 'F3' && event.code !== 'F4' && event.code !== 'F5' && event.code !== 'F6'
        && event.code !== 'F7' && event.code !== 'F8' && event.code !== 'F9' && event.code !== 'F10' && event.code !== 'F11' && event.code !== 'F12'
        && event.code !== 'Escape' && event.code !== 'Tab' && event.code !== 'CapsLock' && event.code !== 'Meta' && event.code !== 'ContextMenu'
        && event.code !== 'Enter' && event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowDown'
    ) {
        if(!caps){
            if(langRu){
                textArea.innerHTML += keyCodes[event.code]['ru'].toLowerCase()
                return
            }

            textArea.innerHTML += keyCodes[event.code]['eng'].toLowerCase()
            return;
        }
    }
    	if(langRu){
        textArea.innerHTML += keyCodes[event.code]['ru']
        return
    }
        textArea.innerHTML += keyCodes[event.code]['eng']


    if (event.code === 'ArrowUp') {
        textArea.innerHTML += '▲'
    }
    if (event.code === 'ArrowRight') {
        textArea.innerHTML += '►'
    }
    if (event.code === 'ArrowDown') {
        textArea.innerHTML += '▼'
    }
    if (event.code === 'ArrowLeft') {
        textArea.innerHTML += '◄'
    }

}, false)

document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        down = false
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.russian)
        } else {
            paintButtons(characters.english)
        }
    }
}, false)

