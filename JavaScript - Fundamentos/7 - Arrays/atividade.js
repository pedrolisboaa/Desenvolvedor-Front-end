function main(numeros){
    const novo = []
    const asterisco = '*'

    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            novo.push(String(numeros[i]))
        }else{
            novo.push(asterisco)
        }
    }

    console.log(novo.join(''))
}





const numeros = [1, 5, 3, 2, 7, 8, 9, 4]
main(numeros)