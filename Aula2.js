const precoEtanol = 3.90;
const precoGasolina = 5.75;
const combustivelCarro = "Etanol";
const gastoPorKm = 2;
const distanciaKm = 145;
const combustivelGasto = distanciaKm/gastoPorKm;
const valorGasolina = combustivelGasto*precoGasolina;
const valorEtanol = combustivelGasto*precoEtanol;

console.log("Foram gastos: " + combustivelGasto.toFixed(2) + " Litros para realizar a viagem");
console.log("Caso o carro utilize gasolina será gasto um total de: R$" + valorGasolina);
console.log("E em etanol será de R$" + valorEtanol);