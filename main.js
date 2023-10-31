const textArea = document.createElement('textarea')
textArea.setAttribute('disabled', 'true')
document.body.append(textArea)
let caps = false
let langRu = true

const characters = {
    english: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[',']','\\'],
        ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';','"', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm',',','.','/', '▲', 'Shift'],
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
    ] ,
    shiftArrEn: [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
        ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Fn', '◄', '▼', '►', 'Ctrl']
    ]
};

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
            button.addEventListener('click', () => {
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
    console.log(langRu)
    document.getElementById('buttons')?.remove()
    if (!langRu ) {
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

})

let down = false
document.addEventListener('keydown', (event) => {
    console.log(event.code)
    if (event.key !== 'Shift' && event.code !== 'Alt' && event.code !== 'Backspace' && event.key !== 'Alt'
        && event.key !== 'Control' && event.code !== 'Delete' && event.code !== 'Insert' && event.code !== 'End' && event.code !== 'Home'
        && event.code !== 'PageUp' && event.code !== 'PageDown' && event.code !== 'ScrollLock' && event.code !== 'Pause' && event.code !== 'Pause'
        && event.code !== 'F1' && event.code !== 'F2' && event.code !== 'F3' && event.code !== 'F4' && event.code !== 'F5' && event.code !== 'F6'
        && event.code !== 'F7' && event.code !== 'F8' && event.code !== 'F9' && event.code !== 'F10' && event.code !== 'F11' && event.code !== 'F12'
        && event.code !== 'Escape' && event.code !== 'Tab' && event.code !== 'CapsLock' && event.code !== 'Meta' && event.code !== 'ContextMenu'
        && event.code !== 'Enter' && event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowDown'
    ) {
        textArea.innerHTML += event.key
    }
    if (event.code === 'Backspace') {
        textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1)
    }
    if (event.code === 'CapsLock') {
        caps = !caps
        document.getElementById('buttons')?.remove()
        if (langRu === true) {
            paintButtons(characters.russian)
        } else {
            paintButtons(characters.english)
        }
    }
    if (event.key === 'Shift') {
        if (down) return
        down = true
        document.getElementById('buttons')?.remove()
        paintButtons(characters.shiftArrRu)
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

