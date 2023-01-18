let hour = 0
let min = 0
let sec = 0
let watch = document.querySelector('.watch')

//Iniciar

document.querySelector('#iniciar').addEventListener('click', () => {
    let = interval = setInterval(() => {
        relogio()
}, 1000);
})
    
// Pause 

document.querySelector('#pausar').addEventListener('click', () => {
    clearInterval(interval)
})
// Stop

document.querySelector('#parar').addEventListener('click', () => {
    clearInterval(interval)
    watch.innerHTML = '00:00:00'
    hour = 0
    min = 0
    sec = 0
})

//Funções

function relogio() {
    sec++
    if(sec == 60) {
        min++
        sec = 0
        if(min == 60){
            min = 0
            hour++
        }
    }
    
    watch.innerHTML = `${digits(hour)}:${digits(min)}:${digits(sec)}`
}

function digits(digit) {
    if(digit < 10){
        return('0' + digit)
    } else {
        return digit
    }
}