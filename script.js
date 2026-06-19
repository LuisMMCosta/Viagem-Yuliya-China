// IDs que correspondem a resultados finais e seus nomes amigáveis
const resultNames = {
    "dp5_nature": "SuHang",
    "dp5_villages": "Aldeias",
    "dp5_luxo": "Luxo",
    "dp5_boring": "Aborrecido",
    "dp5_chill": "Relaxar",
    "dp5_hk": "Hong Kong",
    "dp5_sz": "Shenzhen",
    "dp5_macau": "Macau",
    "dp5_pequim": "Pequim",
    "dp6_norte": "Norte da China",
    "dp6_best": "Melhor escolha",
    "dp5_short": "Viagem curta",
    "dp5_familiar": "Familiar",
    "dp5_unknown": "Desconhecido",
    "dp5_watertown": "Cidade aquática",
    "dp4_civ": "Civilização",
    "dp4_gram": "Gramática",
    "dp4_eng": "Inglês",
    "dp5_idc": "Inner Mongolia",
    "dp5_chengdu": "Chengdu"
};

let chosenResult = null;

function startQuiz() {
    const audio = document.getElementById("bgm");
    if (audio) {
        audio.volume = 0.07;
        audio.play();
    }
    next('dp1'); // transição para o primeiro bloco
}

function next(id) {
    // esconder todos os blocos
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));

    // mostrar apenas o bloco escolhido
    const nextDiv = document.getElementById(id);
    if (nextDiv) {
        nextDiv.classList.add('active');
    }

    // se for resultado final, guardar e mostrar
    if (Object.keys(resultNames).includes(id)) {
        chosenResult = id;
        document.getElementById("resultText").innerText = "Destino final: " + resultNames[id];
        document.getElementById("finalResult").classList.add("active");

        // parar música
        const audio = document.getElementById("bgm");
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}

function copyResult() {
    if (chosenResult) {
        const text = "Destino final: " + resultNames[chosenResult];
        navigator.clipboard.writeText(text);
        alert("Resultado copiado: " + text);
    }
}

function restartQuiz() {
    // esconder todos os blocos
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));

    // voltar ao início
    document.getElementById('landing').classList.add('active');

    // parar música
    const audio = document.getElementById("bgm");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
