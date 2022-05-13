// SINTAXE USANDO O MAP

const array = [1, 4, 6, 9];
array.map((item) => item);

// USANDO FILTER

const frutas = ['maçã', 'uva', 'pera'];
frutas.filter((fruta) =>frutas.includes('uva'));

// usando reduce

const callbackfn = funcion(accumulator, currentValue, index,  array){
// do something
}
array.reduce(callbackfn, initialValue)



// ----------------------------------------- PRATICA  --------------------------------------

//  CRIANDO OS OBJETOS
const maca = {
  value: 2
}

const laranja = {
  value: 3
}

// USANDO O MAP COM O thisArg
function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg);
}

const nums1 = [1, 2]
//console.log('this -> maçã', mapComThis(nums1, maca))
//console.log('this -> laranja', mapComThis(nums1, laranja))

// USANDO MAP SEM O thisArg
function mapSemThis(arr) {
  return arr.map(function (item) {
    return item + 2;
  });
}

const nums2 = [2, 4, 6, 8, 10]

//console.log('this -> maçã', mapSemThis(nums2))

//VERIFICANDO SE AS CONSTANTES FORAM ALTERADAS

console.log(nums1, nums2);
