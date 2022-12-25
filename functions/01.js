//Tem seu próprio this
//Cria seu próprio contexto a partir do NEW
function  minhaFunction() {
    //Este
    this.name = "Wilhams"

    const minhaArrowFuncion = () => {
        this.lastName = "Gomes"
    }

    minhaArrowFuncion()

}
console.log( new minhaFunction())
console.log(this)

//Tem o this do escopo que foram criadas
//Não tem construtor -> Não é um objeto -> Não tem um this próprio
//Herda do this de onde foi criada
const minhaArrowFuncioNext = () => {
    this.sobrenome = "Silva"
}

console.log(minhaArrowFuncioNext())
console.log(this)