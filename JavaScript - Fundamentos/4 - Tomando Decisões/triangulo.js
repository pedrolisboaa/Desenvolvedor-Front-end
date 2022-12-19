let a = 3;
let b = 3;
let c = 4

if (a + b < c || a + c < b || b + c < a){
    console.log('Não é um triângulo')
}else{
    if (a === b && b === c && c === a){
        console.log('Equilátero')
    }else if (a !== b && b !== c && c !== a){
        console.log('Escaleno')
    }else{
        console.log('Isósceles')
    }
}