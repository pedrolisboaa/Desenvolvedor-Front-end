function criarObjeto(){
    return {
        raca: "Golden retriever",
        latir(){
            console.log('au au')
        }
    }
}


const  cachorro = criarObjeto()
cachorro.latir()