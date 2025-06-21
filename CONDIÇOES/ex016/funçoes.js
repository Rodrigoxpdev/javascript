


function contar(){
    const i = document.getElementById('iinicio')
    const fim = document.getElementById('ifim')
    const passo = document.getElementById('ipasso')
    const res = document.getElementById('res')
    

    if (passo <= 0 ){
        window.alert('passo invalido considerando passo 1')
        p = 1
    }


    if (i.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
        // window.alert('[ERRO] faltam dados')

    }else{
        res.innerHTML = 'Contando: <br>'
        const i = Number(i.value)
        const f = Number(fim.value)
        const p = Number(passo.value)

        //CONTAGEM CRSCENTE
        if(i < f){
            for(const c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }else{
            //CONTAGEM REGRESSIVA
            for(const c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 






















