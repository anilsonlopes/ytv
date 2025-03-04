<template>
  <div>
    <nuxt-link to="#">
      <img
        :src="movie.poster"
        class="h-72 w-52 object-cover"
        :alt="movie.title"
      />
      <div
        v-if="showInfo"
        class="text-sm flex justify-between text-neutral-500 mt-2"
      >
        <div>
          {{ movie.genre }}
        </div>
        <div>
          {{ movie.year }}
        </div>
      </div>
    </nuxt-link>
    <button
      v-if="showInfo"
      type="button"
      class="mt-2 flex justify-center items-center w-full bg-neutral-600 rounded py-2 space-x-2"
    >
      <Icon name="solar:list-check-minimalistic-bold-duotone" />
      <span class="text-sm">Adicionar a lista</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  movie: Movie;
  showInfo?: boolean;
}>();
</script>

<style></style>
