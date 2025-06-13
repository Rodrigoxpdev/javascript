
// function calcular(){
//     const txtv = document.getElementById('txtvel')
//     const res = document.getElementById('res')
//     const vel = Number(txtv.value)
//     res.innerHTML = `<p> sua velocidade atual é de  <strong> ${vel}km/h</strong></p>`

//     if (vel > 60){
//         res.innerHTML = `voce esta multado por Excesso de velocidade`
//     }
//     res.innerHTML += ' use sempre cinto de segurança'
// } 


const nm = 'Rodrigo'

function verificar(){
    const nome = document.getElementById('txt1')
    const res2 = document.getElementById('res2')

    if (nome.value.trim().toLowerCase() === "rodrigo"){
        res2.innerHTML = `Acesso Autorizado Seja Bem Vindo ${nm}`

    }else{
        res2.innerHTML = `erro usuario nao autorizado`
    }

}


























