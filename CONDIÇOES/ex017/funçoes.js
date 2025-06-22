function tabuada(){
    // PEGANDO OS ID
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    
    
    // CONDIÇAO
    if (num.value.length == 0){//SE O NUMERO DIGITADO FOR IGUAL A 0 
        window.alert('digite um numero')
    }else{
        // CONVERTENDO PARA NUMERO
        let n = Number(num.value) //CONVERTENDO PARA NUMERO VLR DIGITADO
        let c = 1 //CONTADOR IGUAL A 1
        tab.innerHTML = '' //LIMPANDO OS VALORES ANTES DE EXECUTRAR
        while (c <= 10) { //EMQUANTO C FOR MEN0R OU IGUAL A 10
            let item = document.createElement('option')//CRIANDO ELEMENTO
            item.text = `${n} x ${c} = ${n*c}`//ITEM DO ELEMENTO
            tab.appendChild(item) //ITEM FILHO
            tab.value = `tab${c}`//VENDO O VALOR SELECIONADO
            c++ //ADICIONANDO UM VALOR A MAIS EM LOOP 
        }
    }
}






















