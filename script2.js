// --------- PRATICA - FILTER

function filterPares(arr) {
  return arr.filter(callBack)
}
//FUNCTION PARA RETORNAR OS NUMEROS PARES DE NUM DETERMINADO ARRAY
function callBack(item) {
  return item % 2 === 0
}

const meuArray = [1, 43, 63, 23, 75]

//MOSTRANDO O RESTULRADO
console.log(filterPares(meuArray))
