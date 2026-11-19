/* 

alert(3*5) sem "" simples ou duplas ele intende como numero, agr com aspas ele intende como letras

 Ele é case sensitive ou seja maiúsculo e minusculo tem diferença

- E o hífen é usado apenas para subtração

*/

/*    VARIÁVEIS
   
   let é uma var única, o let funciona dentro de blocos {}
   var pode ser redefinido ao decorrer do código 
   const é constante, nunca muda nem dentro de blocos{}
*/ 

/*    OPERADORES
   + soma
   - subtração
   * multiplicação
   / divisão
   ++ incremento, ex: valor1= 5 ++valor1= 6 soma 1 a mais
   -- decremento, ex: valor1= 5 --valor1= 4 subtrai 1 
   += significa q vai somar as var e a var inicial vai ser igual a soma delas {var1 = var1 + var2}
   -= significa q vai subtrair as var e var inicial vai ser igual  a subtração delas { var1 = var 1 - var2}
   == se um é igual a outro
   === se um é igual ao outro até na tipagem
   != se um é diferente do outro
   !== se uma é diferente do outro até na tipagem
   < Menor que
   > Maior que
   <= Menor ou igual
   >= Maior ou igual
   && e no sentido de somar condições
   || ou no sentido de uma condição ou outra
   ! significa contrario ou negação
*/

/* OPERADOR TERNÁRIO

var idade, eleitor;
idade = 16;
                      condicional    true       se   false
                        ||             ||        ||    ||
eleitor = (idade < 18)   ?     "Menor de idade"  :   "Apto"

*/

/* 

function soma (valor1,valor2){
      return valor1 + valor2
}

document.getElementById("texto").innerHTML=soma (10,10)

*/

const carro = {
   marca: "ford",
   modelo: "ka",
   ano:2015,
   placa:"ABC-1234",
   buzina: function () {alert('Biiiiiiiiiiiiii')},
   completo: function (){ 
      return "A marca é "+this.marca+" e o modelo é: "+this.modelo
   }


}

alert(carro.completo());