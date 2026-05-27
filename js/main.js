// const Produtos = [];
 
// let contador = 0, QTDObjetos = 0, Total = Produtos[Contador].Preco * Produtos[Contador].Quantidade
 
// QTDObjetos = Number(prompt("Quantos na lista de hoje?"))
   
// do {
//     const Produto = {
//         Nome: prompt("Qual o nome do produto?"),
//         Preco: Number(prompt("Qual é o valor do produto?")),
//         Quantidade: Number(prompt("Quantos tem desse produto?")),
//     }
//     Produtos.push(Produto)
// } while (Contador != QTDObjetos);
 
      
 
// do {
//     let total = Produtos[Contador].Preco * Produtos[Contador].Quantidade
 
//     if (Produtos[Contador].Quantidade > 0) {
//         alert(`${Produtos[Contador].Nome}: Tem estoque!`)
//     } else {
//         alert(`${Produtos[Contador].Nome}: Fora de estoque!`)
//     }
 
//     alert(`${Produtos[Contador].Nome} - Total em valor: R$ ${Total}`)
 
//     Contador++
 
// } while (Contador != QTDObjetos)
 
// let totalLoja = 0
 
// Contador = 0
 
// do {
//     totalLoja += Produtos[Contador].Preco * Produtos[Contador].Quantidade
//     Contador++
// } while (Contador > QTDObjetos)
 
// prompt("Valor total do estoque da loja: R$ " + totalLoja);

const Produtos = [];
 
let contador = 0;
let QTDObjetos = 0;
 
QTDObjetos = Number(prompt("Quantos produtos na lista de hoje?"));
 
do {
 
  const Produto = {
    Nome: prompt("Qual o nome do produto?"),
    Preco: Number(prompt("Qual é o valor do produto?")),
    Quantidade: Number(prompt("Quantos tem desse produto?")),
  };
 
  Produtos.push(Produto);
 
  contador++;
 
} while (contador != QTDObjetos);
 
contador = 0;
 
do {
 
  let total = Produtos[contador].Preco * Produtos[contador].Quantidade;
 
  if (Produtos[contador].Quantidade > 0) {
    alert(`${Produtos[contador].Nome}: Tem estoque!`);
  } else {
    alert(`${Produtos[contador].Nome}: Fora de estoque!`);
  }
 
  alert(`${Produtos[contador].Nome} - Total em valor: R$ ${total}`);
 
  contador++;
 
} while (contador != QTDObjetos);
 
let totalLoja = 0;
 
contador = 0;
 
do {
 
  totalLoja += Produtos[contador].Preco * Produtos[contador].Quantidade;
 
  contador++;
 
} while (contador != QTDObjetos);
 
alert("Valor total do estoque da loja: R$ " + totalLoja);