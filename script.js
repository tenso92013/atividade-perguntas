const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você considera o Brasil um pais extremamente desigual?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "afirmação"
            },
            {
                texto: "Sim",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a desigualdade crescendo cada dia mais, você acha que tem solução para isso?",
        alternativas: [
            {
                texto: "Não há nada que possamos fazer.",
                afirmacao: "afirmação"
            },
            {
                texto: "Tem solução apesar de ser dificil.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que a culpa disso tudo é de quem?",
        alternativas: [
            {
                texto: "Do brasileiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "De quem tem poder, isso envolve politicos e a elite.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "em quanto tempo você acha que o Brasil ficará melhor?",
        alternativas: [
            {
                texto: "Entre 10-20 anos.",
                afirmacao: "afirmação"
            },
            {
                texto: "30+ anos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que você faz para mudar seu pais? ",
        alternativas: [
            {
                texto: "Nada.",
                afirmacao: "afirmação"
            },
            {
                texto: "O possivel.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();