// Declarando array de alunos
let alunos = new Array(); // Cria um array vazio para armazenar os dados dos alunos

// Loop para 3 alunos
for (let index = 0; index < 3; index++) {
    // Solicita o nome do aluno via prompt
    const nome = prompt(`Digite o nome do ${index + 1}º aluno:`);

    let notas = new Array(); // Cria um array vazio para armazenar as notas desse aluno

    // Loop para 4 notas (4 bimestres)
    for (let bimestre = 0; bimestre < 4; bimestre++) {
        // Solicita a nota do bimestre e converte para número
        const nota = Number(prompt(`Digite a nota do ${bimestre + 1}º Bimestre do ${nome}: `));
        notas.push(nota); // Adiciona a nota no array de notas
    }

    // Cria um objeto aluno com nome e notas
    const aluno = {
        nome: nome,
        notas: notas
    };

    // Adiciona o aluno ao array de alunos
    alunos.push(aluno);
}

// Inicializa uma string para construir a mensagem final que será exibida
let mensagemFinal = "Resultado Final:\n\n";

// Percorre todos os alunos para calcular a média e determinar o status
for (let contador = 0; contador < alunos.length; contador++) {
    const aluno = alunos[contador]; // Obtém o aluno atual

    let soma = 0; // Variável para somar as notas

    // Soma todas as notas do aluno
    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    // Calcula a média das notas
    let media = soma / aluno.notas.length;
    let statusNota = ""; // Inicializa variável para status (Aprovado, Recuperação, Reprovado)

    // Determina o status de acordo com a média
    if (media < 5) {
        statusNota = "Reprovado";
    } else if (media < 7) {
        statusNota = "Em recuperação";
    } else {
        statusNota = "Aprovado";
    }

    // Adiciona o resultado desse aluno na mensagem final
    mensagemFinal += `${aluno.nome}\n Média = ${media.toFixed(2)} - ${statusNota}\n\n`;
}

// Exibe todos os resultados em um único alert
alert(mensagemFinal);
