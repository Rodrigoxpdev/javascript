let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//SE O NUMERO NAO FOR ENCONTRADO NA LISTA
// -1 = NUMERO NAO ENCONTRADO NA LISTA!
function inLista(n, l){
    if(l.indexOF(Number(n)) != -1){
        return true 
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('tudo ok')
    }else{
        window.alert('Valor invalido ou já adicionado na lista.')
    }
}





























