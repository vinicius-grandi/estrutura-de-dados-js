const primatas = ['humano', 'chimpanzé', 'naindertal']

console.log(primatas.entries().next().value[1])

console.log(primatas.includes('human'))
console.log(primatas.find(a => a == "c%"))