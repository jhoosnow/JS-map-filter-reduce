const lista = 
[
  //PRODUTO 1
  {
    name: 'Sabão',
    preco: 30
  },
  //PRODUTO 2
  {
    name: 'Desinfetante',
    preco: 18
  },
  //PRODUTO 3
  {
    name:'Rodo',
    preco: 20
  }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista)
{
  return lista.reduce(function(prev, current, index)
  {
    console.log('Rodada ', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
  }, saldoDisponivel);
} 
console.log(calculaSaldo(saldoDisponivel, lista));