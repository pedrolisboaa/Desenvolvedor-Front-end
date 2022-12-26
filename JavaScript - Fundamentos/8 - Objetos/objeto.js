const lapis = {
    cor: 'preto',
    modelo: 'HB',

    escrever(){
        console.log(`O lápis ${this.modelo} de cor ${this.cor} esta escrevendo!`)
    },
    apagar(){
        console.log(`O lápis ${this.modelo} de cor ${this.cor} esta apagando!`)
    }
}

lapis.corDaBorracha = 'branca'
lapis['tamanho'] = 20

console.log(lapis.cor)
console.log(lapis.modelo)
lapis.escrever()
lapis.apagar()
console.log(lapis.corDaBorracha)
console.log(lapis.tamanho)


console.log(lapis)
console.log(Object.keys(lapis0001))