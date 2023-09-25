const perguntas_tdh = [
    "Você tem dificuldade para se concentrar em tarefas ou atividades?",
    "Você se sente facilmente entediado ou desmotivado?",
    "Você tem dificuldade para controlar seus impulsos?",
    "Você é facilmente distraído por estímulos externos?",
    "Você tem dificuldade para seguir instruções ou completar tarefas até o fim?",
    "Você tem dificuldade para organizar suas atividades?",
    "Você tem dificuldade para controlar sua agitação?",
    "Você fala demais ou interrompe os outros?",
    "Você tem dificuldade para esperar sua vez?",
    "Você se movimenta ou mexe muito em situações inapropriadas?",
    "Você tem dificuldade para prestar atenção a detalhes ou cometer erros de distração?",
    "Você tem dificuldade para manter a atenção em tarefas ou atividades?",
    "Você tem dificuldade para seguir instruções e completar tarefas até o fim?",
    "Você evita ou tem aversão a tarefas que exigem esforço mental constante?",
    "Você perde coisas necessárias para tarefas ou atividades?",
    "Você é facilmente distraído por pensamentos ou estímulos irrelevantes?",
    "Você se sente desorganizado ou desajeitado?",
    "Você costuma ter dificuldade em manter o controle do seu tempo e frequentemente se atrasa para compromissos?",
    "Você tem dificuldade em permanecer sentado ou em uma posição por longos períodos?",
    "Você costuma esquecer compromissos?"
];

const perguntasDiv = document.getElementById('perguntas');
perguntas_tdh.forEach((pergunta, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = `<p>${index + 1}. ${pergunta}</p>
        <label>
            <input type="radio" name="q${index + 1}" value="sim"> Sim
        </label>
        <label>
            <input type="radio" name="q${index + 1}" value="não"> Não
        </label>`;
    perguntasDiv.appendChild(div);
});

document.getElementById('avaliarBtn').addEventListener('click', function () {
    const respostas = [];
    const perguntas = document.querySelectorAll('input[type="radio"]:checked');
    perguntas.forEach(function (pergunta) {
        respostas.push(pergunta.value);
    });

    if (respostas.length === perguntas_tdh.length) {
        const contadorSim = respostas.filter(r => r === 'sim').length;
        let mensagem = '';

        if (contadorSim >= 15) {
            mensagem = "Você tem indicações de TDAH. Consulte um profissional de saúde para uma avaliação completa.";
        } else if (contadorSim >= 10) {
            mensagem = "Você pode ter algum tipo de transtorno. Consulte um profissional de saúde para avaliação e orientação.";
        } else {
            mensagem = "Não parece haver indicações claras de TDAH ou de outro transtorno. No entanto, consulte um profissional de saúde se tiver preocupações.";
        }

        document.getElementById('resultado').style.display = 'block';
        document.getElementById('mensagem').textContent = mensagem;
    } else {
        alert("Por favor, responda todas as perguntas.");
    }
});