<template>
  <div class="py-10">
    <div class="flex justify-between items-end mb-6">
      <h4 class="text-2xl font-semibold">O que assistir essa semana</h4>
      <nuxt-link to="#" class="flex items-center space-x-3">
        <span class="inline-block">Ver mais</span>
        <Icon name="solar:arrow-right-line-duotone" class="-mb-px" />
      </nuxt-link>
    </div>
    <ClientOnly>
      <swiper-container :slides-per-view="'auto'" :space-between="25">
        <swiper-slide
          v-for="movie in movies.all"
          class="h-72 w-52"
          :key="movie.id"
        >
          <img
            :src="movie.poster"
            class="h-72 w-52 object-cover"
            :alt="movie.title"
          />
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
