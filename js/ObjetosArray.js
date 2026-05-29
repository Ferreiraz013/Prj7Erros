const computadores = [];
const computador = {};
let contador = 0;

alert('Olá! Você preencherá uma lista de computadores. Tudo pronto para começar?')
do {
    computador.placamae = prompt("Qual é a placa mãe?");
    computador.processador = prompt("Qual é o processador?");
    computador.memoria = prompt("Qual é a memória?");
    computador.gpu = prompt("Qual é a placa de vídeo?");
    computador.armazenamento = prompt("Qual é o dispositivo de armazenamento?");

    computadores.push(computador);

    resposta = confirm("Deseja continuar inserindo computadores?");
} while (resposta == true)

// do {
//     alert(`COMPUTADOR
//             Placa-Mãe: ${computadores[contador].placamae}
//             processador: ${computadores[contador].processador}
//             Memória: ${computadores[contador].memoria}
//             Placa de vídeo: ${computadores[contador].gpu}
//             Armazenamento: ${computadores[contador].armazenamento}`);
//     contador++
// } while (contador < computadores.length)

computadores.forEach(computador =>{
    alert(`COMPUTADOR
          Placa-Mãe: ${computadores.placamae}
          processador: ${computadores.processador}
          Memória: ${computadores.memoria}
          Placa de vídeo: ${computadores.gpu}
          Armazenamento: ${computadores.armazenamento}`);
});

alert(`Quantidade de computadores: ${computadores.length}`);
