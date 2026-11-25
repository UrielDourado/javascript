/* =====================================================
   ANOTAÇÕES DE JAVASCRIPT
   Curso JavaScript Completo

   COMO USAR ESTE ARQUIVO
   - Todo exemplo está comentado com //
   - Para testar, tire o // da linha (ou das linhas) do exemplo
   - Teste um de cada vez, senão os alerts aparecem em sequência
   - Se nada acontecer, aperte F12 e olhe a aba Console (os erros aparecem lá)

   ÍNDICE
   1. Conceitos básicos
   2. Variáveis
   3. Operadores
   4. Operador ternário
   5. Funções
   6. Eventos (Aula 10)
   7. Arrays (matrizes) []
   8. Objetos {}
   ===================================================== */


/* =====================================================
   1. CONCEITOS BÁSICOS
   ===================================================== */

// alert e console.log
//   alert("texto")        -> abre uma janelinha no navegador
//   console.log("texto")  -> escreve no Console (F12), não incomoda a tela

// Números x texto
//   alert(3 * 5);       // 15       -> sem aspas, o JS entende como NÚMERO
//   alert("3 * 5");     // 3 * 5    -> com aspas (simples ou duplas), entende como TEXTO
//   console.log("3" + "5");   // 35 (junta texto)
//   console.log(3 + 5);       // 8  (soma números)

// Case sensitive
//   Maiúsculo e minúsculo fazem diferença: nome, Nome e NOME são variáveis diferentes
//   let nome = "Ana";
//   console.log(nome);   // Ana
//   console.log(Nome);   // erro: Nome is not defined

// Hífen
//   O hífen (-) é usado apenas para subtração (não pode ser usado em nomes de variáveis)
//   Para nomes compostos use camelCase: nomeCompleto
//   let nomeCompleto = "Ana Silva";   // ok
//   let nome-completo = "Ana Silva";  // erro


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

// Exemplo com let:
//   let idade = 16;
//   idade = 17;                  // ok
//   console.log(idade);          // 17
//   let idade = 18;              // erro: já foi declarada

// Exemplo com const:
//   const pi = 3.14;
//   console.log(pi);             // 3.14
//   pi = 3.15;                   // erro: const não pode ser reatribuída
//                                // (o erro PARA o script nessa linha)

// Exemplo de escopo:
//   if (true) {
//     let dentro = "oi";
//     var fora = "olá";
//   }
//   console.log(fora);           // olá  (var ignora o bloco)
//   console.log(dentro);         // erro: dentro is not defined


/* =====================================================
   3. OPERADORES
   ===================================================== */

/* ---- Aritméticos ---- */
//  +    soma
//  -    subtração
//  *    multiplicação
//  /    divisão
//  ++   incremento (soma 1)
//  --   decremento (subtrai 1)
//
//   let valor1 = 5;
//   ++valor1;                    // incrementa e devolve o valor novo
//   console.log(valor1);         // 6
//   --valor1;
//   console.log(valor1);         // 5
//
//   Diferença entre ++x e x++:
//   let x = 5;
//   console.log(x++);            // 5 (mostra o atual, depois soma)
//   console.log(x);              // 6
//   console.log(++x);            // 7 (soma, depois mostra)

/* ---- Atribuição ---- */
//  +=   soma e guarda na própria variável    ->  var1 += var2   é   var1 = var1 + var2
//  -=   subtrai e guarda na própria variável ->  var1 -= var2   é   var1 = var1 - var2
//
//   let total = 10;
//   total += 5;
//   console.log(total);          // 15
//   total -= 3;
//   console.log(total);          // 12

/* ---- Comparação ---- */
//  ==   igual (compara só o valor)
//  ===  igual até na tipagem (valor e tipo)
//  !=   diferente
//  !==  diferente até na tipagem
//  <    menor que
//  >    maior que
//  <=   menor ou igual
//  >=   maior ou igual
//
//   console.log(5 == "5");       // true
//   console.log(5 === "5");      // false
//   console.log(5 != 6);         // true
//   console.log(5 !== "5");      // true
//   console.log(10 >= 10);       // true

/* ---- Lógicos ---- */
//  &&   E   -> todas as condições precisam ser verdadeiras
//  ||   OU  -> basta uma condição ser verdadeira
//  !    NÃO -> contrário / negação
//
//   console.log(true && false);  // false
//   console.log(true || false);  // true
//   console.log(!true);          // false
//   console.log(18 > 10 && 5 < 8);   // true


/* =====================================================
   4. OPERADOR TERNÁRIO
   ===================================================== */

//  condição  ?  valor se true  :  valor se false
//
//   let idadeUsuario = 16;
//   //             condicional      true               false
//   //                 ||             ||                 ||
//   let eleitor = (idadeUsuario < 18) ? "Menor de idade" : "Apto";
//   console.log(eleitor);        // Menor de idade


/* =====================================================
   5. FUNÇÕES
   ===================================================== */

// Função que soma dois valores:
//   function soma(valor1, valor2) {
//     return valor1 + valor2;
//   }
//   console.log(soma(10, 10));   // 20
//   alert(soma(2, 3));           // 5

// Mostrando o resultado em um elemento HTML:
//   HTML: <p id="texto"></p>   (precisa estar ANTES do <script>)
//   document.getElementById("texto").innerHTML = soma(10, 10);
//   Se o elemento não existir, dá erro: Cannot set properties of null


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

/* ---- Exemplos ---- */
// No HTML:
//   <button onclick="alert('Clicou!')">Clique</button>
//
// No JS, com addEventListener:
//   HTML: <button id="botao">Clique</button>
//   document.getElementById("botao").addEventListener("click", function () {
//     alert("Clicou!");
//   });
//
// Esperar o HTML carregar:
//   document.addEventListener("DOMContentLoaded", function () {
//     console.log("HTML carregado");
//   });


/* =====================================================
   7. ARRAYS (MATRIZES) []
   ===================================================== */

// Lista de itens entre colchetes. Os índices começam em 0.
//   const lista = ["arroz", "feijao", "macarrao", "leite"];

// Acessar um item:
//   alert(lista[0]);                  // arroz
//   console.log(lista[1]);            // feijao

// Mostrar a lista toda:
//   alert(lista);                     // arroz,feijao,macarrao,leite
//   alert(lista.join(", "));          // arroz, feijao, macarrao, leite
//   (o join deixa você escolher o separador, sem precisar pôr espaço dentro do texto)

// Tamanho da lista (.length) e último item:
//   console.log(lista.length);                // 4
//   console.log(lista[lista.length - 1]);     // leite

// Alterar um item:
//   lista[0] = "arroz integral";
//   console.log(lista);

// Adicionar / remover (funciona mesmo com const):
//   lista.push("ovo");                // adiciona no final
//   lista.pop();                      // remove o último
//   lista.unshift("café");            // adiciona no começo
//   lista.shift();                    // remove o primeiro

// Percorrer a lista inteira:
//   for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
//   }

/* ---- Juntar listas: concat ---- */
//   const lista = ["arroz", "feijao", "macarrao", "leite"];
//   const padoca = ["rosca", "queijo", "sonho"];
//   const pessoa = ["fulano", "beltrano", "ciclano"];
//   const superLista = lista.concat(padoca, pessoa);
//   console.log(superLista);          // as 10 palavras em uma lista só
//   (concat cria uma lista NOVA, as originais não mudam)

/* ---- Remover: delete x splice ---- */
//   delete lista[0];                  // tira o valor, mas FICA O LOCAL VAZIO
//   console.log(lista);               // [empty, "feijao", "macarrao", "leite"]
//   console.log(lista[0]);            // undefined
//   console.log(lista.length);        // 4 (o tamanho não diminui)
//   Para remover de verdade, use splice (abaixo)

/* ---- splice(posição, quantos remover, ...itens novos) ---- */
//   Altera a lista original.
//   const lista = ["arroz", "feijao", "macarrao", "leite"];
//   lista.splice(1, 0, "item 1", "item 2");   // a partir do índice 1, remove 0 e ADICIONA
//   console.log(lista);               // ["arroz", "item 1", "item 2", "feijao", "macarrao", "leite"]
//
//   lista.splice(1, 2);               // a partir do índice 1, REMOVE 2 itens
//   console.log(lista);               // ["arroz", "feijao", "macarrao", "leite"]
//
//   lista.splice(1, 1, "novo");       // remove 1 e coloca outro no lugar (substitui)
//   console.log(lista);               // ["arroz", "novo", "macarrao", "leite"]

/* ---- slice(início, fim) ---- */
//   Copia um pedaço da lista. NÃO altera a original.
//   O início é incluído e o fim NÃO é incluído.
//   const carros = ["celta", "corsa", "cruze", "civic", "veloster", "agile"];
//   console.log(carros.slice(2, 4));  // ["cruze", "civic"]  (índices 2 e 3)
//   console.log(carros.slice(2));     // ["cruze", "civic", "veloster", "agile"]  (do 2 até o fim)
//   console.log(carros.slice(-2));    // ["veloster", "agile"]  (os 2 últimos)

/* ---- Ordenar: sort e reverse ---- */
//   Atenção: os dois ALTERAM a lista original.
//   const carros = ["celta", "corsa", "cruze", "civic", "veloster", "agile"];
//   carros.sort();                    // ordem alfabética
//   console.log(carros);              // ["agile", "celta", "civic", "corsa", "cruze", "veloster"]
//   carros.reverse();                 // inverte a ordem (alfabética ao contrário)
//   console.log(carros);              // ["veloster", "cruze", "corsa", "civic", "celta", "agile"]

/* ---- Ordenar números ---- */
//   O sort() sozinho ordena como TEXTO, então o 10 vem antes do 2:
//   const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];
//   numeros.sort();
//   console.log(numeros);             // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]  (errado)
//
//   Para números, passe uma função de comparação:
//   numeros.sort(function (a, b) { return a - b; });   // crescente
//   console.log(numeros);             // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   numeros.sort(function (a, b) { return b - a; });   // decrescente
//   console.log(numeros);             // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/* ---- Maior e menor número ---- */
//   function MaiorNumero(array) {
//     return Math.max.apply(null, array);
//   }
//   function MenorNumero(array) {
//     return Math.min.apply(null, array);
//   }
//   console.log(MaiorNumero(numeros));   // 10
//   console.log(MenorNumero(numeros));   // 1
//
//   Forma mais moderna (spread):
//   console.log(Math.max(...numeros));   // 10
//   console.log(Math.min(...numeros));   // 1

/* ---- filter: filtrar itens ---- */
//   Cria uma lista NOVA só com os itens que passam no teste (return true).
//   A função recebe: value (item), index (posição), array (lista toda).
//   const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];
//   const maior5 = numeros.filter(filtragem);
//   function filtragem(value, index, array) {
//     return value > 5;
//   }
//   console.log(maior5);              // [7, 10, 8, 6, 9]
//   maior5.sort(function (a, b) { return a - b; });
//   console.log(maior5);              // [6, 7, 8, 9, 10]
//
//   Forma curta (arrow function):
//   const maior5 = numeros.filter(v => v > 5);

/* ---- Mostrar a lista na página ---- */
//   HTML: <p id="test"></p>   (precisa estar ANTES do <script>)
//   document.getElementById("test").innerHTML = maior5.join(" - ");
//   Resultado na tela: 6 - 7 - 8 - 9 - 10
//   (se o id não existir, dá erro: Cannot set properties of null)

/* ---- Resumo: altera a original? ---- */
//   ALTERAM:       push, pop, shift, unshift, splice, sort, reverse, delete
//   NÃO ALTERAM:   concat, slice, filter, join (devolvem algo novo)


/* =====================================================
   8. OBJETOS {}
   ===================================================== */

// Guarda dados em pares chave: valor. Pode ter funções (métodos).
//   const carro = {
//     marca: "ford",
//     modelo: "ka",
//     ano: 2015,
//     placa: "ABC-1234",
//     buzina: function () { alert("Biiiiiiiiiiiiii"); },
//     completo: function () {
//       return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
//     }
//   };

// Acessar propriedades:
//   console.log(carro.marca);         // ford
//   console.log(carro["modelo"]);     // ka

// Chamar métodos (com parênteses):
//   carro.buzina();
//   alert(carro.completo());          // A marca é ford e o modelo é: ka

// Alterar / adicionar propriedade (funciona mesmo com const):
//   carro.ano = 2020;
//   carro.cor = "preto";
//   console.log(carro);

// this -> dentro do método, "this" é o próprio objeto (this.marca = carro.marca)