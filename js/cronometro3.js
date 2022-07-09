var hh = 0
var mm = 0
var ss = 0

var tempo = 1000
var cron;

var res = document.querySelector('#res')

btniniciar = document.querySelector('#iniciar')
btnpausar = document.querySelector('#pausar')
btnzerar = document.querySelector('#zerar')
btnvelo =  document.querySelector('#velocidade')

cliqueiniciar = 0
cliquevelo = 0

function iniciar(){

    cliqueiniciar++

    if(cliqueiniciar > 0){

        btniniciar.style.cursor='default'
        btniniciar.disabled=true
        btniniciar.classList.add('shadow')
    }
    cliquevelo++
    if(cliquevelo > 0){
        btnvelo.style.cursor="default"
        btnvelo.disabled=true
        btnvelo.classList.add('shadow')

    }
    cron = setInterval(timer, tempo);

}

function pausar(){

    if(cliqueiniciar > 0){

        btniniciar.style.cursor='pointer'
        btniniciar.disabled=false
        btniniciar.classList.remove('shadow')

    }
    cliquevelo++
    if(cliquevelo > 0){
        
        btnvelo.style.cursor="pointer"
        btnvelo.disabled=false
        btnvelo.classList.remove('shadow')
        
    }

    clearInterval(cron);

}

function zerar(){

    tempo = 1000
    if(cliqueiniciar > 0){

        btniniciar.style.cursor='pointer'
        btniniciar.disabled=false
        btniniciar.classList.remove('shadow')

    }
    cliquevelo++
    if(cliquevelo > 0){

        btnvelo.style.cursor="pointer"
        btnvelo.disabled=false
        btnvelo.classList.remove('shadow')
        
    }
    clearInterval(cron)

    hh = 0
    mm = 0
    ss = 0
    
    res.innerHTML="00:00:00"

}

function timer(){
    ss++
    var format;
    if(ss == 60){
        ss = 0
        mm++
    }if(mm == 60) {
        hh++
        mm = 0
    }

    format = (hh < 10 ? '0'+ hh : hh)+':'+(mm < 10 ? '0'+ mm : mm) +':'+ (ss < 10 ? '0' + ss : ss)
    res.innerHTML= format
    
}
function velocidade(){
    
    cliquevelo++
    if(cliquevelo > 0){

        btnvelo.style.cursor="default"
        btnvelo.disabled=true
        btnvelo.classList.add('shadow')

    }
    tempo = 500

}

