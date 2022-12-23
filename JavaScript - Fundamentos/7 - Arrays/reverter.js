function main(palavra){
    const array = []
    for(let i = 0; i < palavra.length; i++){
        array.push(palavra[i])
    }   
    console.log(array.reverse().join(''))
}

main('pedro')