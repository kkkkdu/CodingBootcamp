/*const precoEtanol = 3.90;
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
Exercício1:
 
const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1+nota2+nota3)/3;

if(media<5){
    console.log(" ALuno reprovado");
}else if(media>=5 && media<=7){
    console.log("Aluno de recuperação");
}else{
    console.log(media.toFixed(1));
    console.log("Aluno aprovado");

}

const peso = 130;
const altura = 1.70;
const imc = peso/(altura*altura);
console.log(imc.toFixed(2));
if(imc < 18.5){
    console.log("Abaixo do peso");
    }
else if(imc >=18.5 && imc <=25){
    console.log(" Peso normal");
    }
else if(imc>=25 && imc<=30){
    console.log("Acima do peso");
}
else if (imc>=30 && imc <=40){
    console.log("Obeso");
}
else{
    console.log("Obesidade Grave");
}
*/
let preco = 750;
const aVista = preco*10/100;
const dinPix = preco*15/100;
const parcelado = preco/2;
const megaParcela = (preco*10/100) + preco;
const descontoaVista = preco-aVista;
const descontodinPix = preco-dinPix;
const metodoPagamento = 3;

if(metodoPagamento === 1){
    console.log("Com pagamento em dinheiro o valor será de R$" + descontoaVista);
}
else if (metodoPagamento === 2){
    console.log(" Parcelando em 2 vezes fica um valor de R$" + parcelado + " por parcela");
}
else if (metodoPagamento === 3){
    console.log("Após duas parcelas a compra será no valor de R$" + megaParcela + " dividido entre parcelas");
}
else {
    console.log(" Ainda deseja realizar a compra?");
}