<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="show in shows.all" :key="show.id">
        <div class="relative">
          <img
            :src="show.wall"
            :alt="show.title"
            class="w-full h-96 object-cover rounded"
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-black to-black/20 flex items-end"
          >
            <div class="p-8">
              <div class="flex justify-between items-center">
                <h2 class="text-3xl font-semibold w-full pr-4">
                  {{ show.title }}
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
                {{ show.summary }}
              </p>
            </div>
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
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
</script>

<style></style>
