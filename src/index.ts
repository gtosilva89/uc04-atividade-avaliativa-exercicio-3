// A criptografia é um conjunto de técnicas pensadas para proteger uma informação de modo que apenas o emissor e receptor consigam compreendê-la.
// Uma forma simples de fazer criptografar um vetor de strings é aplicar uma lógica de troca em cada posição do vetor, de modo que apenas o programador conheça a regra,
// lembrando que a regra aplicada precisa de alguma forma ser reversível.
// Dessa forma um vetor auxiliar e faça a cópia dos dados do vetor original, porém de forma criptografada e na sequência imprima os dados criptografados no console e por fim,
// crie outro vetor auxiliar que faça a restauração do texto original, copiando a partir do vetor criptografado, e também faça a impressão no console do mesmo.


// Função para criptografar uma string trocando a posição de algumas letras
function criptografarString(texto: string): string {
    if (texto.length <= 1) {
      return texto; // Nada a fazer se a string tiver 0 ou 1 caractere
    }

    const caracteres = texto.split("");

    // Troca a primeira com a última letra
    [caracteres[0], caracteres[caracteres.length - 1]] = [caracteres[caracteres.length - 1], caracteres[0]];

    // Se houver mais de 2 caracteres, troca a segunda com a penúltima
    if (caracteres.length > 2) {
      [caracteres[1], caracteres[caracteres.length - 2]] = [caracteres[caracteres.length - 2], caracteres[1]];
    }

    return caracteres.join("");
  }

  // Função para descriptografar uma string (usa a mesma lógica da criptografia)
  function descriptografarString(texto: string): string {
    return criptografarString(texto);
  }

  // Vetor original de strings
  const vetorOriginal: string[] = [
    "Atividade",
    "Avaliativa",
    "Aula",
    "Typescript",
    "Desenvolvedor"
  ];

  // Vetor auxiliar para armazenar as strings criptografadas
  const vetorCriptografado: string[] = [];

  // Criptografa cada string do vetor original
  for (let i = 0; i < vetorOriginal.length; i++) {
    const stringCriptografada = criptografarString(vetorOriginal[i]);
    vetorCriptografado.push(stringCriptografada);
  }

  // Imprime o vetor criptografado
  console.log("Vetor criptografado:", vetorCriptografado);

  // Vetor auxiliar para armazenar as strings descriptografadas
  const vetorDescriptografado: string[] = [];

  // Descriptografa cada string do vetor criptografado
  for (let i = 0; i < vetorCriptografado.length; i++) {
    const stringDescriptografada = descriptografarString(vetorCriptografado[i]);
    vetorDescriptografado.push(stringDescriptografada);
  }

  // Imprime o vetor descriptografado
  console.log("Vetor descriptografado:", vetorDescriptografado);
