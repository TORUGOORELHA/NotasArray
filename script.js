// Declarando array de alunos
let alunos = new Array();

// Loop para 3 alunos
for (let index = 0; index < 3; index++) {
    const nome = prompt(`Digite o nome do ${index + 1}º aluno:`);

    let notas = new Array();

    // Loop para 4 notas
    for (let bimestre = 0; bimestre < 4; bimestre++) {
        const nota = Number(prompt(`Digite a nota do ${bimestre + 1}º Bimestre do ${nome}: `));
        notas.push(nota);
    }

    // Criar o aluno e adicionar ao array
    const aluno = {
        nome: nome,
        notas: notas
    };

    alunos.push(aluno);
}

// Construir a mensagem final com todos os resultados
let mensagemFinal = "Resultado Final:\n\n";

for (let contador = 0; contador < alunos.length; contador++) {
    const aluno = alunos[contador];

    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    let media = soma / aluno.notas.length;
    let statusNota = "";

    if (media < 5) {
        statusNota = "Reprovado";
    } else if (media < 7) {
        statusNota = "Em recuperação";
    } else {
        statusNota = "Aprovado";
    }

    mensagemFinal += `${aluno.nome}\n Média = ${media.toFixed(2)}\n - ${statusNota}\n\n`;
}

// Mostrar tudo em um único alert
alert(mensagemFinal);
