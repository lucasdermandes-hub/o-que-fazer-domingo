export interface Lugar {
  id: number;
  nome: string;
  categoria: string;
  gratuito: boolean;
  descricao: string;
}

export const lugares: Lugar[] = [
  {
    id: 1,
    nome: "Parque Ambiental",
    categoria: "Ar Livre",
    gratuito: true,
    descricao: "Ótimo lugar para caminhadas e piqueniques ao ar livre."
  },
  {
    id: 2,
    nome: "Shopping",
    categoria: "Passeio",
    gratuito: false,
    descricao: "Ótimo lugar para fazer lanches, fazer compras."
  },
  {
    id: 3,
    nome: "Ir ao cinema",
    categoria: "Entretenimento",
    gratuito: false,
    descricao: "Ótimo lugar para assistir filmes e se divertir."
  },
  {
    id: 4,
    nome: "Correr",
    categoria: "Ar Livre",
    gratuito: true,
    descricao: "Ótimo para se exercitar."
  },
  {
    id: 5,
    nome: "Assistir um filme",
    categoria: "Entretenimento",
    gratuito: true,
    descricao: "Assista um filme."
  },
  {
    id: 6,
    nome: "Assistir uma série",
    categoria: "Entretenimento",
    gratuito: true,
    descricao: "Assista uma série."
  },
  {
    id: 7,
    nome: "Peça um lanche",
    categoria: "Comida",
    gratuito: false,
    descricao: "Peça uma comida."
  },
  {
    id: 8,
    nome: "Passeie com seu cachorro",
    categoria: "Ar Livre",
    gratuito: true,
    descricao: "Ótimo lugar para caminhar e passear com seu cachorro."
  },
  {
    id: 9,
    nome: "Jogar Vídeo Game 🎮",
    categoria: "Vídeo Game",
    gratuito: true,
    descricao: "Ótimo dia para jogar vídeo game."
  },
  {  
    id: 10,
    nome: "Andar de bicicleta 🚲",
    categoria: "Ar Livre",
    gratuito: true,
    descricao: "Hoje está um ótimo dia para andar de bicicleta."
  },
  {
    id: 11,
    nome: "Ir para a academia",
    categoria: "Atividade Física",
    gratuito: false,
    descricao: "Ótimo lugar para praticar uma aividade física."
  },
  {
    id: 12,
    nome: "Caminhadar",
    categoria: "Ar Livre",
    gratuito: true,
    descricao: "Hoje está um ótimo dia para dar uma caminhada."
  },
  {
    id: 13,
    nome: "Estudar",
    categoria: "Estudar",
    gratuito: true,
    descricao: "Hoje está um ótimo dia para Estudar."
  },
  {
    id: 14,
    nome: "Sair com a família",
    categoria: "Entretenimento",
    gratuito: false,
    descricao: "Hoje está um ótimo dia para sair com a família."
  },
  {
    id: 15,
    nome: "Sair com os amigos",
    categoria: "Entretenimento",
    gratuito: true,
    descricao: "Hoje está um ótimo dia para sair com os amigos."
  },
];