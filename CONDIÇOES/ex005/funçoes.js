
function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date() //DATA ATUAL
    const hora = data.getHours() //HORA ATUAL
    const min = data.getMinutes() //MINUTOS ATUAL
    // const seg = data.getSeconds() //SEGUNDOS EM TEMPO REAL
    // const hora = 9
    const sd = document.getElementById('sd')
    msg.innerHTML = `Agora são ${hora}:${min}`


    if (hora >= 0 && hora < 12){
        // MANHA 
        img.src = '../ex005/imagens/foto-manha.png'
        document.body.style.background = "#fddf64";
        sd.innerHTML = "Bom dia..";
    }else if (hora >= 12 && hora < 18){
        // TARDE
        document.body.style.background = "#f2a855";
        img.src = '../ex005/imagens/foto-tarde.png'
        sd.innerHTML = "Bom tarde..";
    }else{
        // NOITE
        document.body.style.background = "#493752";
        img.src = '../ex005/imagens/foto-noite.png'
        sd.innerHTML = 'Boa noite..'
    }
}























