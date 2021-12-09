// Guga, Tânia, Robersval

const nomes = [2, 12, 1, 13, 54, 6, 6]
// 12 - 2 = 10 >>> mantém [2,12,1]
// 1 - 12 = -11 >>> 12 toma lugar de 1 [2,1,12]
// 1 - 2 = -1 >>> 2 toma lugar de 1 [1,2,12]
nomes.sort((a, b) => {
    if(a > b) {
        return -1
    }
    if(a < b) {
        return 1
    }
    return 0
})

console.log(nomes)