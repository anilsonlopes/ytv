<template>
  <div
    class="p-10 bg-neutral-900 bg-no-repeat bg-cover text-neutral-100 h-screen overflow-y-auto flex flex-col justify-between"
    :style="{
      backgroundImage: `url(${backdropImage})`,
    }"
  >
    <!-- topbar -->
    <div class="flex items-center space-x-4">
      <div class="flex items-end space-x-1 text-lg">
        <strong class="font-mono">QUILA</strong>
        <small class="font-serif">tv</small>
      </div>

      <nuxt-link
        class="flex items-center border rounded-lg border-neutral-700 px-2 w-full h-10"
        to="#"
      >
        <Icon name="heroicons:magnifying-glass-20-solid" />
      </nuxt-link>
      <div>
        <button
          type="button"
          class="w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-full"
        >
          <Icon name="heroicons:cog-6-tooth-16-solid" />
        </button>
      </div>
      <MadAvatar
        src="https://cdn.dribbble.com/users/2218129/avatars/normal/260d8001fb99ce6d8af3859da4027525.jpg"
      />
    </div>

    <MoviesHighlight />
    <MoviesWhatToWatchThisWeek />
    <MoviesTop10OnTvThisWeek />
    <MoviesMoreToWatch />
    <MoviesTvFavourites />
    <MoviesTrailers />
    <MoviesTopNews />
  </div>
</template>

<script lang="ts" setup>
const imagesUrl = [
  "https://images.unsplash.com/photo-1702731798609-ef80a827199a?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const backdropImage = computed(() => {
  const randomIndex = Math.floor(Math.random() * imagesUrl.length);
  return imagesUrl[randomIndex];
});
</script>

<style></style>
