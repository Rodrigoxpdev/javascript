
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




function verificar(){
    const texto = document.getElementById('txt1')
    const res2 = document.getElementById('res2')
    const nome = String(texto.value)

    if (nome === 'rd'){
        res2.innerHTML = `Seu nome é ${nome}` 
    }
    else{
        res2.innerHTML = `Nome incorreto`
    }
}
































