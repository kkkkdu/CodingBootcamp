const PreçoCombustivel = 5.80;
let Percurso = 1258;
let GastoVeiculo = 4;

let GastoDistancia = Percurso/GastoVeiculo;
let PreçoPorLitro = GastoDistancia*PreçoCombustivel;



console.log("Foi gasto: " + GastoDistancia  + " Litros neste percurso");
console.log("O combustivel está R$ " + PreçoCombustivel + " Por km");
console.log("No total foram gastos R$" + PreçoPorLitro.toFixed(2) + " para concluir toda a viagem");
console.log("Agora vamos testar o commit");