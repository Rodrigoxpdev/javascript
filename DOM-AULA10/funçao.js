// SE DEIXAR O CONST FORA DA FUNCTION FICA ACESSIVEL DE FORMA GLOBAR SENDO ASSIM POSSO CHAMAR A MESMA FUNÇAO EM VARIOS COMANOS
const a = document.getElementById('area')



// ==========RESUMINDO O CODIGO==============
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
// ------------------------------------------


function clicar(){
    a.innerText = 'clicou'
    a.style.background = 'red'
}

function entrar(){
    a.innerText = 'entrou'
    a.style.background = 'blue'
}

function sair(){
    a.innerText = 'Saiu'
    a.style.background = 'grey'
}



function somar(){
    const tn1 = document.getElementById('txtn1')
    const tn2 = document.querySelector('input#txtn2')
    const res = document.getElementById('res')
    const n1  = Number(tn1.value)
    const n2  = Number(tn2.value)
    const s = n1 + n2
    res.innerHTML = `A SOMA ENTRE ${n1} e ${n2} é igual a ${s}`
}






















