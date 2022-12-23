console.log('Começou, e vou esperar 2 segundos.')

setTimeout(() => {
    console.log('Passou 2 segundos.')
}, 2000)



let minhaFuncao = () => {
    console.log('Eu sou uma arrow function!!')
}


let dobro = numero => numero * 2
let soma = (numero1, numero2) => numero1 + numero2
minhaFuncao()
console.log(dobro(5))
console.log(soma(5, 9))
