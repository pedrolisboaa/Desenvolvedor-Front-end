let hora = 22, 
    mensagem = ''

if (hora < 12){
    mensagem = 'Bom Dia!'
}else if (hora < 18){
    mensagem = 'Boa Tarde!'
}else{
    mensagem = 'Boa Noite!'
}


console.log(mensagem)