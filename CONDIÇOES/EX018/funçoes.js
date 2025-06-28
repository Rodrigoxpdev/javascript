//ARMAZENANDO DADOS USANDO O 'LET'
let num = document.getElementById('fnum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []


// FUNÇAO PARA SABER SE É NUMERO, E SE ESTA ENTRE 1 A 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// VERIFICANDO SE O NUMERO JA ESTA NA LISTA
//SE O NUMERO NAO FOR ENCONTRADO NA LISTA -1 = NUMERO NAO ENCONTRADO NA LISTA!
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
    return true;
    } else {
    return false;
    }
}

//BOTAO DE ADICIONAR
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        flista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}

//BOTAO DE FINALIZAR
function finalizar(){
    if (valores.length == 0){
        window.alert('adicione um numero')
    }else{
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for (let pos in valores){   
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
                if(valores[pos] < menor)
                menor =  valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> a media total é ${media}.</p>`
    }
}





















