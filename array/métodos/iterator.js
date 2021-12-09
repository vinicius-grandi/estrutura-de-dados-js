const frutas = ['banana', 'maçã', 'goiaba']
const it = frutas[Symbol.iterator]()
console.log(it.next().value)