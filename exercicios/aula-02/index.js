/* =====================================================
   ANOTAÇÕES DE JAVASCRIPT
   Curso JavaScript Completo

   COMO USAR ESTE ARQUIVO
   - TUDO aqui está comentado. Nada roda até você ativar um módulo.
   - Abra o arquivo testar-anotacoes.html no navegador (ele já tem
     os elementos que os exemplos precisam e carrega este .js).
   - Aperte F12 e olhe a aba Console: a maioria dos exemplos escreve lá.
   - Se nada acontecer, os erros também aparecem no Console.

   COMO ATIVAR UM MÓDULO (o truque da barra)
   Cada módulo de código começa assim:

        /*
        // ▲ para ATIVAR: adicione uma barra na linha acima
        ...código...
        //*/

   /*Para ATIVAR: transforme o  /*  da primeira linha em  //*
                (é só digitar mais uma barra na frente)
   Para DESATIVAR: tire a barra extra (volta a ser  /* ).
   /*Não mexa na última linha (//*/

  /* DICAS
   - Ative um módulo de cada vez; vários alerts seguidos atrapalham.
   - Os módulos dentro de { } têm variáveis próprias, então dá para
     ativar vários ao mesmo tempo sem dar conflito de nome.
   - Os módulos com function (que o HTML chama pelo onclick) ficam
     fora de { } de propósito, para o botão conseguir enxergá-los.
   - Um erro de SINTAXE derruba o arquivo inteiro. Por isso os
     exemplos "que dão erro de sintaxe" ficam só como texto (//).

   ÍNDICE
    1. Conceitos básicos
    2. Variáveis
    3. Operadores
    4. Operador ternário
    5. Condicionais: if/else e switch
    6. Laços de repetição: for
    7. Funções
    8. DOM: mexendo no HTML pelo JavaScript
    9. Eventos (Aula 10)
   10. Arrays (matrizes) []
   11. Objetos {}
   12. Exemplo prático: select de anos
   ===================================================== */


/* =====================================================
   1. CONCEITOS BÁSICOS
   ===================================================== */

// alert e console.log
//   alert("texto")        -> abre uma janelinha no navegador
//   console.log("texto")  -> escreve no Console (F12), não incomoda a tela

/* [1.1] alert x console.log
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  alert("Isso é um alert");
  console.log("Isso é um console.log (olhe o Console, F12)");
}
//*/

// Números x texto
//   Sem aspas o JS entende como NÚMERO; com aspas (simples ou duplas), como TEXTO.

/* [1.2] Números x texto
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  console.log(3 * 5);       // 15      (conta)
  console.log("3 * 5");     // 3 * 5   (texto)
  console.log("3" + "5");   // 35      (junta texto)
  console.log(3 + 5);       // 8       (soma números)
}
//*/

// Case sensitive
//   Maiúsculo e minúsculo fazem diferença: nome, Nome e NOME são variáveis diferentes

/* [1.3] Case sensitive (o erro é capturado com try/catch para o script continuar)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let nome = "Ana";
  console.log(nome);          // Ana
  try {
    console.log(Nome);        // erro: Nome is not defined
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}
//*/

// Hífen
//   O hífen (-) é usado apenas para subtração (não pode ser usado em nomes de variáveis)
//   Para nomes compostos use camelCase: nomeCompleto
//   let nomeCompleto = "Ana Silva";   // ok
//   let nome-completo = "Ana Silva";  // erro de sintaxe (por isso não dá para ativar)


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

/* [2.1] let
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let idade = 16;
  idade = 17;                  // ok
  console.log(idade);          // 17
  // let idade = 18;           // erro de sintaxe: já foi declarada (não dá para ativar)
}
//*/

/* [2.2] const
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const pi = 3.14;
  console.log(pi);             // 3.14
  try {
    pi = 3.15;                 // erro: const não pode ser reatribuída
  } catch (erro) {
    console.log("Erro:", erro.message);
    // sem o try/catch, o erro PARARIA o script nessa linha
  }
}
//*/

/* [2.3] Escopo: let x var
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  if (true) {
    let dentro = "oi";
    var fora = "olá";
  }
  console.log(fora);           // olá  (var ignora o bloco)
  try {
    console.log(dentro);       // erro: dentro is not defined
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}
//*/


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

/* [3.1] Aritméticos
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  console.log(10 + 5, 10 - 5, 10 * 5, 10 / 5);   // 15 5 50 2

  let valor1 = 5;
  ++valor1;                    // incrementa e devolve o valor novo
  console.log(valor1);         // 6
  --valor1;
  console.log(valor1);         // 5

  // Diferença entre ++x e x++:
  let x = 5;
  console.log(x++);            // 5 (mostra o atual, depois soma)
  console.log(x);              // 6
  console.log(++x);            // 7 (soma, depois mostra)
}
//*/

/* ---- Atribuição ---- */
//  +=   soma e guarda na própria variável    ->  var1 += var2   é   var1 = var1 + var2
//  -=   subtrai e guarda na própria variável ->  var1 -= var2   é   var1 = var1 - var2
//  O += também funciona com TEXTO (acrescenta no final).
//  É isso que o innerHTML += faz: acrescenta, em vez de substituir.

/* [3.2] Atribuição
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let total = 10;
  total += 5;
  console.log(total);          // 15
  total -= 3;
  console.log(total);          // 12

  let frase = "Olá";
  frase += ", mundo";
  console.log(frase);          // Olá, mundo
}
//*/

/* ---- Comparação ---- */
//  ==   igual (compara só o valor)
//  ===  igual até na tipagem (valor e tipo)
//  !=   diferente
//  !==  diferente até na tipagem
//  <    menor que
//  >    maior que
//  <=   menor ou igual
//  >=   maior ou igual

/* [3.3] Comparação
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  console.log(5 == "5");       // true
  console.log(5 === "5");      // false
  console.log(5 != 6);         // true
  console.log(5 !== "5");      // true
  console.log(10 >= 10);       // true
}
//*/

/* ---- Lógicos ---- */
//  &&   E   -> todas as condições precisam ser verdadeiras
//  ||   OU  -> basta uma condição ser verdadeira
//  !    NÃO -> contrário / negação

/* [3.4] Lógicos
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  console.log(true && false);      // false
  console.log(true || false);      // true
  console.log(!true);              // false
  console.log(18 > 10 && 5 < 8);   // true
}
//*/


/* =====================================================
   4. OPERADOR TERNÁRIO
   ===================================================== */

//  condição  ?  valor se true  :  valor se false

/* [4.1] Ternário
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let idadeUsuario = 16;
  //             condicional      true               false
  //                 ||             ||                 ||
  let eleitor = (idadeUsuario < 18) ? "Menor de idade" : "Apto";
  console.log(eleitor);        // Menor de idade
}
//*/


/* =====================================================
   5. CONDICIONAIS: if/else e switch
   ===================================================== */

/* ---- if / else ---- */
//   Executa um bloco se a condição for verdadeira, outro se for falsa.

/* [5.1] if / else if / else
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let nota = 5;               // troque o valor e veja o resultado
  if (nota >= 6) {
    console.log("Aprovado");
  } else if (nota >= 4) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
//*/

/* ---- Exemplo: validar campo vazio ---- */
//   Precisa do HTML (já está no testar-anotacoes.html):
//     <input type="text" id="nome">
//     <button onclick="verificar()">Verificar</button>
//     <p id="teste"></p>
//
//   .value pega o que foi digitado; || é OU; style.color muda a cor do texto.
//   Obs: o valor de um input NUNCA é null, é "" (texto vazio). Então o nome == null
//   é desnecessário. Para ignorar espaços, use: nome.trim() == ""

/* [5.2] Validar campo vazio (if/else com o HTML)
// ▲ para ATIVAR: adicione uma barra na linha acima
function verificar() {
  let nome = document.getElementById("nome").value;

  if (nome == "" || nome == null) {
    let p = document.getElementById("teste");
    p.innerHTML = "O campo não pode ser vazio";
    p.style.color = "red";
  } else {
    let p = document.getElementById("teste");
    p.innerHTML = "Parabéns, tudo certo";
    p.style.color = "green";
  }
}
//*/

/* ---- switch ---- */
//   Bom quando você compara UMA variável com vários valores.
//   O switch compara com === (valor e tipo).
//   - case    -> cada valor possível
//   - break   -> sai do switch (sem ele, o código "escorrega" para o próximo case)
//   - default -> roda quando nenhum case bateu (é o "else" do switch)
//   Dica: em CSS pelo JS, propriedades com hífen viram camelCase:
//   background-color  ->  style.backgroundColor

/* [5.3] switch (muda a cor do fundo da página, com o HTML)
// ▲ para ATIVAR: adicione uma barra na linha acima
function verificaCor() {
  let cor = document.getElementById('cor').value;
  cor = cor.toLowerCase();   // deixa tudo minúsculo, assim "Azul" e "AZUL" funcionam

  switch (cor) {
    case 'azul':
      document.body.style.backgroundColor = "blue";
      break;
    case 'vermelho':
      document.body.style.backgroundColor = "red";
      break;
    case 'amarelo':
      document.body.style.backgroundColor = "yellow";
      break;
    default:
      document.getElementById('teste').innerHTML = "Nenhuma cor disponível para: " + cor;
  }
}
//*/


/* =====================================================
   6. LAÇOS DE REPETIÇÃO: for
   ===================================================== */

//   for (início; condição; passo) { ...código... }
//
//   - início:   roda uma vez, antes de tudo      -> let i = 0
//   - condição: testada antes de CADA volta      -> i < 5   (se for false, o laço termina)
//   - passo:    roda no fim de cada volta        -> i++
//
//   Se a condição já começar falsa, o laço NUNCA roda (e nenhum erro aparece).
//   Se "i" não for um número (ex: NaN), a comparação é sempre false.

/* [6.1] for contando para frente
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  for (let i = 0; i < 5; i++) {
    console.log(i);              // 0, 1, 2, 3, 4
  }
}
//*/

/* [6.2] for contando para trás
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  for (let i = 5; i >= 1; i--) {
    console.log(i);              // 5, 4, 3, 2, 1
  }
}
//*/


/* =====================================================
   7. FUNÇÕES
   ===================================================== */

// Os parênteses () são o que EXECUTA a função:
//   soma      -> a função em si (não executa nada)
//   soma(1,2) -> executa a função e devolve o resultado
//   Esse é o erro clássico: new Date().getFullYear   (errado, devolve a função)
//                           new Date().getFullYear() (certo, devolve o ano)

/* [7.1] Função que soma dois valores
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  function soma(valor1, valor2) {
    return valor1 + valor2;
  }
  console.log(soma(10, 10));   // 20
  alert(soma(2, 3));           // 5
  console.log(soma);           // mostra a função em si (sem executar)
}
//*/

// Mostrando o resultado em um elemento HTML:
//   O elemento precisa existir ANTES do <script>: <p id="texto"></p>
//   Se não existir, dá erro: Cannot set properties of null

/* [7.2] Resultado da função em um elemento HTML (<p id="texto">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  function soma(valor1, valor2) {
    return valor1 + valor2;
  }
  document.getElementById("texto").innerHTML = soma(10, 10);
}
//*/


/* =====================================================
   8. DOM: MEXENDO NO HTML PELO JAVASCRIPT
   ===================================================== */

/* ---- Pegar um elemento pelo id ---- */
//   let el = document.getElementById("ano");    // o id é o que está no HTML: id="ano"
//   Se o id não existir (ou o script rodar antes do elemento), el vira null e dá erro.
//   Solução: colocar o <script> no FINAL do <body>.

/* ---- Ler e escrever ---- */
//   el.value                 -> valor de um input / select (o que o usuário digitou/escolheu)
//   el.innerHTML = "texto"   -> SUBSTITUI o conteúdo do elemento (aceita tags HTML)
//   el.innerHTML += "texto"  -> ACRESCENTA no final, sem apagar o que já tem
//   el.style.color = "red"   -> muda o estilo (CSS) do elemento

/* [8.1] innerHTML: = substitui, += acrescenta (usa <p id="dom">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let el = document.getElementById("dom");
  el.innerHTML = "Primeiro texto. ";
  el.innerHTML = "Substituiu o anterior. ";   // o "Primeiro texto" sumiu
  el.innerHTML += "Esse foi acrescentado.";   // fica junto do anterior
  el.style.color = "blue";
}
//*/

/* ---- Data: new Date() ---- */
//   hoje.getFullYear();      // ano com 4 dígitos (ex: 2026)  -> NÃO esquecer os ()
//   hoje.getMonth();         // mês de 0 a 11 (janeiro = 0!)
//   hoje.getDate();          // dia do mês
//   hoje.getDay();           // dia da semana (0 = domingo)

/* [8.2] Data
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let hoje = new Date();
  console.log(hoje.getFullYear());   // ano
  console.log(hoje.getMonth());      // mês (0 a 11)
  console.log(hoje.getDate());       // dia do mês
  console.log(hoje.getDay());        // dia da semana (0 = domingo)
  console.log(new Date().getFullYear);   // SEM parênteses: mostra a função, não o ano
}
//*/

/* ---- Montando HTML dentro de texto (as aspas) ---- */
//   Existem dois "mundos" na linha: o JavaScript e o HTML.
//   - As aspas que ABREM e FECHAM o texto pertencem ao JavaScript.
//   - As aspas que ficam DENTRO do texto vão aparecer no HTML final.
//   - Por isso usamos tipos diferentes: " por fora e ' por dentro (ou o contrário).
//   - Variável FORA das aspas = usa o valor dela. Dentro das aspas = vira texto.
//
//   "<option value='" + i + "'>" + i + "</option>"
//     |_ texto _|      |_v_| |texto| |_v_| |_ texto _|
//
//   O i aparece 2 vezes: no value (o que o formulário envia) e no texto (o que o usuário vê).
//   Se usasse " nos dois lugares, o JS acharia que o texto acabou antes da hora:
//   "<option value="" + i + "">"    // erro!

/* [8.3] Aspas: montando a string com + (veja o resultado no Console)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let i = 1950;
  console.log("<option value='" + i + "'>" + i + "</option>");
  // <option value='1950'>1950</option>

  console.log("i");   // dentro das aspas: o texto "i"
  console.log(i);     // fora das aspas: o valor 1950
}
//*/

/* ---- Jeito mais limpo: template literal (crases) ---- */
//   Tudo entre crases `...` é texto, e ${variável} insere o valor da variável.
//   Dentro das crases, pode usar " normalmente, sem conflito.

/* [8.4] Template literal
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let i = 1950;
  console.log("<option value='" + i + "'>" + i + "</option>");   // antes (confuso)
  console.log(`<option value="${i}">${i}</option>`);             // depois (limpo)
}
//*/

/* ---- Jeito mais organizado: createElement ---- */
//   Cria o elemento direto, sem montar texto (sem aspas para confundir).
//   Mais rápido em listas grandes, porque o innerHTML += refaz a lista inteira a cada volta.

/* [8.5] createElement (preenche o segundo select, <select id="ano2">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const select = document.getElementById('ano2');
  for (let i = 2026; i >= 1900; i--) {
    const option = document.createElement('option');   // cria <option>
    option.value = i;                                  // define o value
    option.textContent = i;                            // define o texto visível
    select.appendChild(option);                        // coloca dentro do <select>
  }
}
//*/


/* =====================================================
   9. EVENTOS (Aula 10)
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
// No HTML (já está no testar-anotacoes.html):
//   <button onclick="alert('Clicou!')">Clique</button>

/* [9.1] addEventListener: clique (usa <button id="botao">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  document.getElementById("botao").addEventListener("click", function () {
    alert("Clicou!");
  });
}
//*/

/* [9.2] Mouse sobre / fora (usa <div id="caixa">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const caixa = document.getElementById("caixa");
  caixa.addEventListener("mouseover", function () {
    caixa.style.backgroundColor = "orange";
  });
  caixa.addEventListener("mouseout", function () {
    caixa.style.backgroundColor = "#eee";
  });
}
//*/

/* [9.3] Teclado / input: mostra o que está sendo digitado (usa #campo e #saida)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const campo = document.getElementById("campo");
  campo.addEventListener("input", function () {
    document.getElementById("saida").innerHTML = "Você digitou: " + campo.value;
  });
}
//*/

/* [9.4] Esperar o HTML carregar
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML carregado");
  });
}
//*/


/* =====================================================
   10. ARRAYS (MATRIZES) []
   ===================================================== */

// Lista de itens entre colchetes. Os índices começam em 0.

/* [10.1] Acessar itens, mostrar a lista, tamanho e último item
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];

  alert(lista[0]);                         // arroz
  console.log(lista[1]);                   // feijao

  alert(lista);                            // arroz,feijao,macarrao,leite
  alert(lista.join(", "));                 // arroz, feijao, macarrao, leite
  // (o join deixa você escolher o separador, sem precisar pôr espaço dentro do texto)

  console.log(lista.length);               // 4
  console.log(lista[lista.length - 1]);    // leite
}
//*/

/* [10.2] Alterar, adicionar e remover (funciona mesmo com const)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];

  lista[0] = "arroz integral";
  console.log(lista);

  lista.push("ovo");                // adiciona no final
  console.log(lista);
  lista.pop();                      // remove o último
  console.log(lista);
  lista.unshift("café");            // adiciona no começo
  console.log(lista);
  lista.shift();                    // remove o primeiro
  console.log(lista);
}
//*/

/* [10.3] Percorrer a lista inteira
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
//*/

/* ---- Juntar listas: concat ---- */
//   concat cria uma lista NOVA, as originais não mudam

/* [10.4] concat
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];
  const padoca = ["rosca", "queijo", "sonho"];
  const pessoa = ["fulano", "beltrano", "ciclano"];
  const superLista = lista.concat(padoca, pessoa);
  console.log(superLista);          // as 10 palavras em uma lista só
  console.log(lista);               // a original continua igual
}
//*/

/* ---- Remover: delete x splice ---- */
//   delete tira o valor, mas FICA O LOCAL VAZIO (o tamanho não diminui).
//   Para remover de verdade, use splice (abaixo).

/* [10.5] delete
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];
  delete lista[0];
  console.log(lista);               // [empty, "feijao", "macarrao", "leite"]
  console.log(lista[0]);            // undefined
  console.log(lista.length);        // 4 (o tamanho não diminui)
}
//*/

/* ---- splice(posição, quantos remover, ...itens novos) ---- */
//   Altera a lista original.

/* [10.6] splice
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const lista = ["arroz", "feijao", "macarrao", "leite"];

  lista.splice(1, 0, "item 1", "item 2");   // a partir do índice 1, remove 0 e ADICIONA
  console.log(lista);               // ["arroz", "item 1", "item 2", "feijao", "macarrao", "leite"]

  lista.splice(1, 2);               // a partir do índice 1, REMOVE 2 itens
  console.log(lista);               // ["arroz", "feijao", "macarrao", "leite"]

  lista.splice(1, 1, "novo");       // remove 1 e coloca outro no lugar (substitui)
  console.log(lista);               // ["arroz", "novo", "macarrao", "leite"]
}
//*/

/* ---- slice(início, fim) ---- */
//   Copia um pedaço da lista. NÃO altera a original.
//   O início é incluído e o fim NÃO é incluído.

/* [10.7] slice
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const carros = ["celta", "corsa", "cruze", "civic", "veloster", "agile"];
  console.log(carros.slice(2, 4));  // ["cruze", "civic"]  (índices 2 e 3)
  console.log(carros.slice(2));     // ["cruze", "civic", "veloster", "agile"]  (do 2 até o fim)
  console.log(carros.slice(-2));    // ["veloster", "agile"]  (os 2 últimos)
}
//*/

/* ---- Ordenar: sort e reverse ---- */
//   Atenção: os dois ALTERAM a lista original.

/* [10.8] sort e reverse
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const carros = ["celta", "corsa", "cruze", "civic", "veloster", "agile"];
  carros.sort();                    // ordem alfabética
  console.log(carros);              // ["agile", "celta", "civic", "corsa", "cruze", "veloster"]
  carros.reverse();                 // inverte a ordem (alfabética ao contrário)
  console.log(carros);              // ["veloster", "cruze", "corsa", "civic", "celta", "agile"]
}
//*/

/* ---- Ordenar números ---- */
//   O sort() sozinho ordena como TEXTO, então o 10 vem antes do 2.
//   Para números, passe uma função de comparação.

/* [10.9] Ordenar números
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];
  numeros.sort();
  console.log(numeros);             // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]  (errado)

  numeros.sort(function (a, b) { return a - b; });   // crescente
  console.log(numeros);             // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  numeros.sort(function (a, b) { return b - a; });   // decrescente
  console.log(numeros);             // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
}
//*/

/* ---- Maior e menor número ---- */

/* [10.10] Maior e menor
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];

  function MaiorNumero(array) {
    return Math.max.apply(null, array);
  }
  function MenorNumero(array) {
    return Math.min.apply(null, array);
  }
  console.log(MaiorNumero(numeros));   // 10
  console.log(MenorNumero(numeros));   // 1

  // Forma mais moderna (spread):
  console.log(Math.max(...numeros));   // 10
  console.log(Math.min(...numeros));   // 1
}
//*/

/* ---- filter: filtrar itens ---- */
//   Cria uma lista NOVA só com os itens que passam no teste (return true).
//   A função recebe: value (item), index (posição), array (lista toda).

/* [10.11] filter
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];
  const maior5 = numeros.filter(filtragem);
  function filtragem(value, index, array) {
    return value > 5;
  }
  console.log(maior5);              // [7, 10, 8, 6, 9]
  maior5.sort(function (a, b) { return a - b; });
  console.log(maior5);              // [6, 7, 8, 9, 10]

  // Forma curta (arrow function):
  console.log(numeros.filter(v => v > 5));
}
//*/

/* ---- Mostrar a lista na página ---- */
//   O elemento precisa existir ANTES do <script>: <p id="test"></p>
//   Se o id não existir, dá erro: Cannot set properties of null

/* [10.12] Mostrar a lista na tela (<p id="test">)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const numeros = [1, 7, 2, 3, 10, 4, 8, 5, 6, 9];
  const maior5 = numeros.filter(v => v > 5);
  maior5.sort(function (a, b) { return a - b; });
  document.getElementById("test").innerHTML = maior5.join(" - ");
  // Resultado na tela: 6 - 7 - 8 - 9 - 10
}
//*/

/* ---- Resumo: altera a original? ---- */
//   ALTERAM:       push, pop, shift, unshift, splice, sort, reverse, delete
//   NÃO ALTERAM:   concat, slice, filter, join (devolvem algo novo)


/* =====================================================
   11. OBJETOS {}
   ===================================================== */

// Guarda dados em pares chave: valor. Pode ter funções (métodos).
// this -> dentro do método, "this" é o próprio objeto (this.marca = carro.marca)

/* [11.1] Objeto: propriedades e métodos
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert("Biiiiiiiiiiiiii"); },
    completo: function () {
      return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }
  };

  // Acessar propriedades:
  console.log(carro.marca);         // ford
  console.log(carro["modelo"]);     // ka

  // Chamar métodos (com parênteses):
  carro.buzina();
  alert(carro.completo());          // A marca é ford e o modelo é: ka

  // Alterar / adicionar propriedade (funciona mesmo com const):
  carro.ano = 2020;
  carro.cor = "preto";
  console.log(carro);
}
//*/


/* =====================================================
   12. EXEMPLO PRÁTICO: SELECT DE ANOS
   ===================================================== */

// Preenche um <select> com os anos, do atual até 1900 (ordem decrescente,
// útil para ano de nascimento).
//
// HTML necessário (ANTES do <script>):  <select id="ano"></select>
//
// Passo a passo:
//   1. new Date().getFullYear()  -> pega o ano atual (com os parênteses!)
//   2. o for começa no ano atual e vai diminuindo até 1900
//   3. a cada volta, innerHTML += acrescenta uma <option> no <select>
//
// Ative só UM dos dois módulos abaixo (os dois preenchem o mesmo select).

/* [12.1] Select de anos com aspas e + (versão original)
// ▲ para ATIVAR: adicione uma barra na linha acima
let anoCorrente = new Date().getFullYear();

for (let i = anoCorrente; i >= 1900; i--) {
   document.getElementById('ano').innerHTML += "<option value='" + i + "'>" + i + "</option>"
}
//*/

/* [12.2] Select de anos com template literal (mais legível)
// ▲ para ATIVAR: adicione uma barra na linha acima
{
  let anoAtual = new Date().getFullYear();

  for (let i = anoAtual; i >= 1900; i--) {
     document.getElementById('ano').innerHTML += `<option value="${i}">${i}</option>`
  }
}
//*/