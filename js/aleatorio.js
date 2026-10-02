const nomes = ["Miguel", "Tainá", "Letícia", "Gabriel", "Beatriz", "Rafael", "Sophia"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
