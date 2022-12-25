const array = [
    { name: "iPhone", price: 5000, quantity: 2 },
    { name: "MacBook Pro", price: 20000, quantity: 1 },
    { name: "Magic Mouse", price: 1000, quantity: 5 },
]

//.find - Retorna o CONTEÚDO do primeiro elemento do array levando em consideração a condição
const find = array.find((product) => product.price > 1000)
//console.log({ find })

//.findIndex - Retorna o INDEX do primeiro elemento do array levando em consideração a condição
const findIndex = array.findIndex((product) => product.price > 10000)
// console.log({ findIndex })

//.some - Retorna true ou false se ALGUM item do array atender a condição
const some = array.some( (product) => product.price < 1000 )
// console.log({ some })

//.every - Retorna true ou false se TODOS os item do array atender a condição
const every = array.every( (product) => product.price > 500 )
//console.log({ every })

//.map - Mapeia todos os elementos do array e retorna de acordo com as condições estabelecidas
const map = array.map( (product) => ({
    ...product,
    subtotal: product.price * product.quantity
}));
// console.log(map)

//.filter - Filtra os elementos do array e só retorna aqueles que atendem a condição
const filter = array.filter( (product) => product.quantity > 2)
//console.log(filter)

//.reduce - Intera sobre o array e utiliza o valor de cada item para criar um novo valor
const reduce = array.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
}, 0);
//console.log({reduce})

// const numbers = [10, 20, 30, 40];
// numbers.filter(n => n > 20);
// console.log(numbers);

// const numbers = [10, 20, 30, 40];
// console.log(numbers.filter(n => n > 20));

const prices = [2000, 1230, 8000, 3999];
const teste = prices.every( (p) =>  p > 1000);
console.log(teste)