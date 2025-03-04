<template>
  <div class="py-10">
    <div class="flex justify-between items-end mb-6">
      <h4 class="text-2xl font-semibold">Mais listados</h4>
      <nuxt-link to="#" class="flex items-center space-x-3">
        <span class="inline-block">Ver mais</span>
        <Icon name="solar:arrow-right-line-duotone" class="-mb-px" />
      </nuxt-link>
    </div>
    <ClientOnly>
      <swiper-container :slides-per-view="'auto'" :space-between="25">
        <swiper-slide v-for="movie in movies.all" class="w-52" :key="movie.id">
          <MadPoster :movie="movie" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
