// Função anônima!
let falar_nome = function(nome){
    console.log(`Olá ${nome}`)
}

falar_nome('Pedro')

//callback exeplo
console.log('Começou!')
setTimeout(function(){
    console.log('OI')
}, 2000)