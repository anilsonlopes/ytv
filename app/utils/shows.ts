export type Show = {
  id: number;
  title: string;
  slug: string;
  year: number;
  genres: string[];
  poster: string;
  wall: string;
  summary: string;
};

const shows: Show[] = [
  {
    id: 1,
    title: "Eu, a patroa e as Crianças",
    slug: "eu-a-patroa-e-as-criancas",
    year: 2001,
    genres: ["Comédia"],
    poster:
      "https://www.themoviedb.org/t/p/w1280/huMehRjXBkFkO9BWPly1635y0J0.jpg",
    wall: "https://image.tmdb.org/t/p/original/5U1FuxLcrT3aStnSiT94D9khQKC.jpg",
    summary:
      "Jay Kyle precisa se dedicar exclusivamente a carreira na contabilidade, porém Michael acredita que esse não é o melhor caminho para Jay, pois acredita que a mesma usa do trabalho para desvirtuar-se de sua família. A menina Kady está sob os cuidados da babá Rosa, uma mulher mexicana que nunca caiu aos encantos do patrão. Claire vive o período da pré-adolescência e costuma ser um pouco arrogante em suas atitudes. Júnior demonstra seu gosto pelo Hip-Hop, porém é desvirtuado da ideia pelo seu pai, que costuma extrapolar, quando o quesito é disciplina.",
  },
  {
    id: 2,
    title: "Sobrenatural",
    slug: "sobrenatural",
    genres: ["Drama, Mistério", "Sci-Fi", "Fantasia"],
    year: 2007,
    poster:
      "https://www.themoviedb.org/t/p/w1280/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg",
    wall: "https://image.tmdb.org/t/p/original/lirPqYLTtd6XZqGn4cS1wiesTq0.jpg",
    summary:
      "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.",
  },
  {
    id: 3,
    title: "Dexter",
    slug: "dexter",
    year: 2006,
    genres: ["Crime", "Drama", "Mistério"],
    poster:
      "https://www.themoviedb.org/t/p/w1280/5DHlhR5WHDFGkM5agZqfrtR7oDX.jpg",
    wall: "https://image.tmdb.org/t/p/original/nS5ZSmrX92lu1GYAlXZye1mkDfd.jpg",
    summary:
      "Renomado funcionário da Polícia de Miami, Dexter esconde de todos uma segunda identidade: ele é um assassino em série que mata os criminosos que a polícia não consegue prender.",
  },
];

export default {
  getById: (id: number) => shows.find((show) => show.id === id),
  getBySlug: (slug: string) => shows.find((show) => show.slug === slug),
  all: shows,
};
