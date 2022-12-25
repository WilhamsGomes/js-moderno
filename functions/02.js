function soma(primeiroParametro, ...argumentos){
    console.log({primeiroParametro})
    console.log({argumentos})
}

//soma(1, 2, 3, 4, 5, 6, 7, "WIlhams")

//Vai buscar o arguments do PAI, o Arrow Function não possui
const somaArrow = () => {
    console.log(arguments)
}

somaArrow(1, 2, 3, 4, 5, 6, 7, "WIlhams")