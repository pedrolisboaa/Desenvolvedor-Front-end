let a = 5;
let b = 7;
let c = 6;
let d = 8;


function main(a, b, c, d){
    let conceito;
    let media = (a + b + c + d) / 4

    if (media >= 9) {
       conceito = 'A' 
    }else if (media >= 7.5){
        conceito = 'B'
    }else if (media >= 6){
        conceito = 'C'
    }else if (media  >= 4){
        conceito = 'D'
    }else{
        conceito = 'F'
    }

    console.log(conceito)
}


console.log(main(a, b, c, d))



let multiplicadorCincoPontoCinco = 5.5
let multiplicadorQuatroPontoOitoCinco = 4.85

let quantidade = 35
if (quantidade < 25) {
    console.log(quantidade * multiplicadorCincoPontoCinco)
}else{
    console.log(quantidade * multiplicadorQuatroPontoOitoCinco)
}
