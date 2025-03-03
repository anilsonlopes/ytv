<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <div>
          <img
            :src="movie.poster"
            :alt="movie.title"
            class="w-full h-96 object-cover rounded"
          />
          <div class="py-4 px-2">
            <div class="flex justify-between items-center">
              <h2 class="text-3xl font-semibold w-full pr-4">
                {{ movie.title }}
              </h2>
              <nuxt-link
                to="#"
                class="px-4 py-2 rounded bg-neutral-700 items-center flex space-x-3"
              >
                <Icon name="solar:play-bold" />
                <span>Assistir</span>
              </nuxt-link>
            </div>

            <p class="mt-2 text-gray-500 line-clamp-3 max-w-4xl">
              {{ movie.summary }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <ul class="mt-5 flex space-x-2">
      <li class="w-8 h-2 bg-red-500 rounded"></li>
      <li class="w-2 h-2 bg-red-500 rounded"></li>
      <li class="w-2 h-2 bg-red-500 rounded"></li>
      <li class="w-2 h-2 bg-red-500 rounded"></li>
    </ul>
  </ClientOnly>
</template>

<script lang="ts" setup>
const movies = ref([
  {
    id: 1,
    title: "Vendo ou Alugo",
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
    videoId: "2OHPGLfFGZY",
    genre: "Infantil",
    poster: "https://i.ytimg.com/vi/2OHPGLfFGZY/maxresdefault.jpg",
    summary:
      "Uma turma de amigos na cidade de Campina Bela encontra um casarão vazio. Querendo brincar, eles entram na casa com aparência de mal assombrada, mas acabam descobrindo que se trata de uma casa fantástica.",
  },
]);

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
</script>

<style></style>
