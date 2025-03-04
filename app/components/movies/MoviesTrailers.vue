<template>
  <div class="py-10">
    <div class="flex justify-between items-end mb-6">
      <h4 class="text-2xl font-semibold">Em breve nos cinemas</h4>
      <nuxt-link to="#" class="flex items-center space-x-3">
        <span class="inline-block">Ver mais</span>
        <Icon name="solar:arrow-right-line-duotone" class="-mb-px" />
      </nuxt-link>
    </div>
    <ClientOnly>
      <swiper-container :slides-per-view="'auto'" :space-between="25">
        <swiper-slide v-for="movie in movies.all" class="w-72" :key="movie.id">
          <nuxt-link to="#">
            <img
              :src="movie.poster"
              class="h-40 w-full object-cover"
              :alt="movie.title"
            />
            <h6 class="text-lg mt-2">
              {{ movie.title }}
            </h6>
            <div class="flex justify-between items-center">
              <div class="font-bold text-sm">2030</div>
              <button
                class="text-neutral-100 px-2 text-xs flex space-x-2 items-center py-1 rounded bg-neutral-700"
              >
                <Icon name="solar:play-bold" size="0.5rem" />
                <span> Trailer </span>
              </button>
            </div>
          </nuxt-link>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
