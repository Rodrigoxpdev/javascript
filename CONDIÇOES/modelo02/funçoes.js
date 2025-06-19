function verificar(){
    const data = new Date() //data atual
    const ano = data.getFullYear() //pega 4digitos 
    const fano = document.getElementById('itxtano')
    const res = document.getElementById('res')

    if (fano.value == 0 || (fano.value > ano) ){
        window.alert("verifique os dados e tente novamente")
    }else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        // const genero = ''
        const img = document.createElement('img')//CRIANDO UM ELEMENTO
        img.setAttribute('id', 'foto') //IMAGEM COM ID FOTO


        //HOMEM
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.style.width = '250px'
                img.setAttribute('src','/CONDIÇOES/modelo02/imagens/criança-homem.png')
                
            }else if (idade < 30){
                //jovem
                img.setAttribute('src','/CONDIÇOES/modelo02/imagens/homem-jovem.png');
                img.style.width = '250px'
                
            }else if (idade < 50){
                //idoso
                img.setAttribute('src','/CONDIÇOES/modelo02/imagens/idoso-homem.png');
                img.style.width = '250px'
            }


            //MULHER
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.width = "250px";
                img.setAttribute("src","/CONDIÇOES/modelo02/imagens/criança-mulher.png"
                );

            } else if (idade < 30) {
              //jovem
                img.style.width = "250px";
                img.setAttribute("src","/CONDIÇOES/modelo02/imagens/mulher-jovem.png"
                );

            } else {
              //idosa
                img.style.width = "250px";
                idade < 50;
                img.setAttribute("src","/CONDIÇOES/modelo02/imagens/idosa-mulher.png"
                );
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}






























