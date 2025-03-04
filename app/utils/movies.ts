const movies = [
  {
    id: 1,
    title: "Vendo ou Alugo",
    slug: "vendo-ou-alugo",
    videoId: "QA1N2CEi9a8",
    genre: "Comédia",
    poster:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCt90zV0flhL-UmkVPk9NlxtFoaCKYtsKhBEP46Sdi2Id1JRADU7qkeu60cwYSQTBjlomx5e9KXZ-n5U79Q8cfz4azt3XvFvr5JgVQDL9TvZCFv1PRrjL2oMWzq4yvQf3TlQMGuKKZ-nA/w1200-h630-p-k-no-nu/Vendo_ou_Alugo_imagem+2.jpg",
    summary:
      "Maria Alice (Marieta Severo) mora com sua mãe (Nathália Timberg), sua filha (Sílvia Buarque) e sua neta (Beatriz Morgana) em um antigo casarão no bairro do Leme, Rio de Janeiro, localizado na entrada de uma favela. Para sobreviver, Maria Alice vive de bicos, mesmo que sejam ilegais, porém ela sabe que a única alternativa de resolver seus problemas é vender o casarão. Entretanto, o maior problema é que ninguém quer comprar a casa, devido à proximidade com a favela. Um dia, Maria encontra uma amiga que diz que seu filho, Júlio (Pedro Monteiro), está trabalhando como corretor de imóveis e tem um estrangeiro louco para comprar uma moradia na cidade. Maria pede que ele o leve à sua casa e, esperançosa que a venda enfim aconteça, passa a organizar tudo para agradar o possível cliente.",
  },
  {
    id: 2,
    title: "Ó Paí, Ó",
    slug: "o-pai-o",
    videoId: "i7DA5c4umKA",
    genre: "Comédia",
    poster:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1evrI6H61T8AlmKHtT4qLt5dvcNQgKGf3ad7BJGPNPY2ezc4Az3lrTFtDTPZXyc-37qD6FoquC09HKtBqcRZLDDinwSf9lY0KBRz_ELF7jvyhIlfgY9ZwDTR9i2OpUYfKwiq6emaRZpip/s1600/dvd.JPG",
    summary:
      "Em um animado cortiço do centro histórico do Pelourinho, em Salvador, tudo é compartilhado pelos seus moradores, especialmente a paixão pelo Carnaval e a antipatia pela síndica do prédio, Dona Joana. Todos tentam encontrar um lugar nos últimos dias do Carnaval, seja trabalhando ou brincando. Incomodada com a farra dos condôminos, Dona Joana decide puní-los, cortando o fornecimento de água do prédio.",
  },
  {
    id: 3,
    title: "A casa fantastica",
    slug: "a-casa-fantastica",
    videoId: "2OHPGLfFGZY",
    genre: "Infantil",
    poster: "https://i.ytimg.com/vi/2OHPGLfFGZY/maxresdefault.jpg",
    summary:
      "Uma turma de amigos na cidade de Campina Bela encontra um casarão vazio. Querendo brincar, eles entram na casa com aparência de mal assombrada, mas acabam descobrindo que se trata de uma casa fantástica.",
  },
];

export default {
  getById: (id: number) => movies.find((movie) => movie.id === id),
  getBySlug: (slug: string) => movies.find((movie) => movie.slug === slug),
  all: movies,
};
