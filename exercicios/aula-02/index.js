/* =====================================================
   ANOTAÇÕES DE JAVASCRIPT
   Curso JavaScript Completo

   ÍNDICE
   1. Conceitos básicos
   2. Variáveis
   3. Operadores
   4. Operador ternário
   5. Funções
   6. Eventos (Aula 10)
   ===================================================== */


/* =====================================================
   1. CONCEITOS BÁSICOS
   ===================================================== */

// Números x texto
//   alert(3 * 5)      -> sem aspas, o JS entende como NÚMERO (resultado: 15)
//   alert("3 * 5")    -> com aspas (simples ou duplas), entende como TEXTO

// Case sensitive
//   Maiúsculo e minúsculo fazem diferença: nome, Nome e NOME são variáveis diferentes

// Hífen
//   O hífen (-) é usado apenas para subtração (não pode ser usado em nomes de variáveis)
//   Para nomes compostos use camelCase: nomeCompleto


/* =====================================================
   2. VARIÁVEIS
   ===================================================== */

// let
//   - Escopo de bloco: só existe dentro do bloco {} onde foi criada
//   - Pode receber novo valor, mas não pode ser declarada de novo no mesmo escopo
//
// var
//   - Pode ser redeclarada e alterada ao longo do código
//   - Escopo de função (ignora blocos {}), por isso hoje é menos recomendada
//
// const
//   - Constante: não pode receber novo valor
//   - Também tem escopo de bloco
//   - Obs: em objetos e arrays o conteúdo ainda pode ser alterado,
//     só não dá para trocar a variável por outro valor

let idade = 16;
idade = 17;            // ok


const pi = 3.14;
pi = 3.15;          // erro: const não pode ser reatribuída


/* =====================================================
   3. OPERADORES
   ===================================================== */

/* ---- Aritméticos ---- */
//  +    soma
//  -    subtração
//  *    multiplicação
//  /    divisão
//  ++   incremento (soma 1)         ex: valor1 = 5; ++valor1  ->  6
//  --   decremento (subtrai 1)      ex: valor1 = 5; --valor1  ->  4

/* ---- Atribuição ---- */
//  +=   soma e guarda na própria variável   ->  var1 += var2   é   var1 = var1 + var2
//  -=   subtrai e guarda na própria variável ->  var1 -= var2   é   var1 = var1 - var2

/* ---- Comparação ---- */
//  ==   igual (compara só o valor)
//  ===  igual até na tipagem (valor e tipo)     ex: 5 === "5"  ->  false
//  !=   diferente
//  !==  diferente até na tipagem
//  <    menor que
//  >    maior que
//  <=   menor ou igual
//  >=   maior ou igual

/* ---- Lógicos ---- */
//  &&   E   -> soma de condições (todas precisam ser verdadeiras)
//  ||   OU  -> uma condição ou outra (basta uma ser verdadeira)
//  !    NÃO -> contrário / negação


/* =====================================================
   4. OPERADOR TERNÁRIO
   ===================================================== */

//  condição  ?  valor se true  :  valor se false

var idadeUsuario, eleitor;
idadeUsuario = 16;
//             condicional     true               false
//                 ||            ||                 ||
eleitor = (idadeUsuario < 18) ? "Menor de idade" : "Apto";


/* =====================================================
   5. FUNÇÕES
   ===================================================== */

// Exemplo: função que soma dois valores e mostra o resultado em um elemento HTML

function soma(valor1, valor2) {
  return valor1 + valor2;
}

// HTML: <p id="texto"></p>
document.getElementById("texto").innerHTML = soma(10, 10);


/* =====================================================
   6. EVENTOS (Aula 10)
   ===================================================== */

/* ---- Mouse ---- */
// onclick       -> Disparado quando recebe um clique
// ondblclick    -> Disparado quando recebe clique duplo
// onmouseover   -> Disparado quando o mouse está sobre o elemento
// onmouseout    -> Disparado quando o mouse é movido para fora do elemento
// onmousemove   -> Disparado quando o mouse é movido dentro do elemento
// onmousedown   -> Disparado quando o botão do mouse é pressionado
// onmouseup     -> Disparado quando o botão do mouse é liberado

/* ---- Foco / Formulário ---- */
// onfocus       -> Disparado quando o elemento recebe o foco (input, etc.)
// onchange      -> Disparado quando existe uma mudança no conteúdo ("ao mudar")
// onblur        -> Disparado quando o elemento perde o foco

/* ---- Teclado ---- */
// onkeydown     -> Disparado quando uma tecla é pressionada
// onkeypress    -> Disparado quando uma tecla é pressionada e solta (OBSOLETO)
// onkeyup       -> Disparado quando uma tecla é solta sobre um elemento

/* ---- Página ---- */
// onload        -> Disparado quando a página termina de carregar (geralmente no body)

/* ---- Outros muito usados ---- */
// oninput       -> Disparado a cada alteração no valor de um input (enquanto digita)
// onsubmit      -> Disparado ao enviar um formulário
// onmouseenter  -> Disparado quando o mouse entra no elemento (não "borbulha")
// onmouseleave  -> Disparado quando o mouse sai do elemento (não "borbulha")
// onscroll      -> Disparado ao rolar a página ou um elemento
// onresize      -> Disparado quando a janela é redimensionada
// oncontextmenu -> Disparado ao clicar com o botão direito
// ondrag        -> Disparado ao arrastar um elemento
// ondrop        -> Disparado ao soltar um elemento arrastado
// ontouchstart  -> Disparado ao tocar na tela (mobile)
// onselect      -> Disparado ao selecionar texto em um campo
// DOMContentLoaded -> Disparado quando o HTML foi carregado (sem esperar imagens)
//                     Só funciona com addEventListener

/* ---- Dicas ---- */
// - Com addEventListener o nome vem SEM o "on": "click", "keydown", "input"...
// - Atribuir onclick de novo sobrescreve o anterior; addEventListener permite vários
// - keypress está obsoleto: prefira keydown ou keyup


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