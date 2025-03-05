<template>
  <div class="py-10 -mx-10 md:mx-0">
    <div class="flex justify-between items-end mb-6">
      <h4 class="text-2xl font-semibold">Top 10 no Quila Tv essa semana</h4>
      <nuxt-link to="#" class="flex items-center space-x-3">
        <span class="inline-block">Ver mais</span>
        <Icon name="solar:arrow-right-line-duotone" class="-mb-px" />
      </nuxt-link>
    </div>
    <ClientOnly>
      <swiper-container :slides-per-view="'auto'" :space-between="25">
        <swiper-slide v-for="show in shows.all" class="w-52" :key="show.id">
          <MadPoster
            :movie="{
              genre: String(show.genres[0]),
              id: show.id,
              poster: show.poster,
              slug: show.slug,
              summary: show.summary,
              title: show.title,
              videoId: '',
              year: show.year,
            }"
          />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
