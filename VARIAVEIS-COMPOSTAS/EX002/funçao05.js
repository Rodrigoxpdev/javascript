//RECURSIVIDADE

function fatorial(n){
    if(n== 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}


console.log(fatorial(5))

// O FATORIAL DE UM NUMERO PODE SER BASEADO NO FATORIAL DE OUTRO NUMERO
//5! = 5 x 4 x 3 x 2 x 1
//5! = 5 x 4!

//EXEMPOLO
// n! = n x (n-1)!
//1! = 1

































