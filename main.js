



const textArea = document.createElement('textarea')

const button = document.createElement('button')

button.innerHTML = 'A'

const button2 = document.createElement('button')

button2.addEventListener('click',(e)=>{
    textArea.innerHTML = textArea.innerHTML += button2.innerHTML
})

document.addEventListener('keydown',(event)=>{
    console.log(event.key)
    if(event.key !== 'Shift' && event.code !== 'Alt' && event.code !== 'Backspace' && event.key !== 'Alt'
       && event.key !== 'Control' && event.code !== 'Delete' && event.code !== 'Insert' && event.code !== 'End' && event.code !== 'Home'
        && event.code !== 'PageUp' && event.code !== 'PageDown' && event.code !== 'ScrollLock' && event.code !== 'Pause' && event.code !== 'Pause'
        && event.code !== 'F1'  && event.code !== 'F2'  && event.code !== 'F3'  && event.code !== 'F4'  && event.code !== 'F5'  && event.code !== 'F6'
        && event.code !== 'F7'  && event.code !== 'F8'  && event.code !== 'F9'  && event.code !== 'F10'  && event.code !== 'F11' && event.code !== 'F12'
        && event.code !== 'Escape' && event.code !== 'Tab' && event.code !== 'CapsLock' && event.code !== 'Meta' && event.code !== 'ContextMenu'
        && event.code !== 'Enter'  && event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowDown'
    ){
        textArea.innerHTML += event.key
    }
    if(event.code === 'Backspace'){
        textArea.innerHTML = textArea.innerHTML.slice(0,textArea.innerHTML.length - 1)
    }
})


button2.innerHTML = 'S'

document.body.append(button,button2,textArea)
