const elevador = {
    totalAndares: 3,
    andarAtual: 0,

    subir(){
        if (this.andarAtual < this.totalAndares){
            this.andarAtual++
        }
        console.log(this.andarAtual)
    },

    descer(){
        if (this.andarAtual > 0){
            this.andarAtual--
        }
        console.log(this.andarAtual)
    }

}



//Uma função chamada “subir”, que ao ser executada aumenta a variável “andarAtual”. Lembrando que não deve permitir subir além do total de andares existentes;
//Uma função chamada "descer", que ao ser executada diminui a variável "andaratual". Lembrando que não deve permitir descer abaixo de 0;
//As funções "subir" e "descer" também devem imprimir o número do novo andar em que o elevador se encontra;
//Mesmo que o elevador não possa mais subir ou descer, ele ainda deve imprimir o andar em que o elevador se encontra.


console.log(elevador.andarAtual);
console.log(elevador.totalAndares);
elevador.subir();
elevador.descer();
elevador.descer();
elevador.subir();
elevador.subir();
elevador.subir();
elevador.subir();