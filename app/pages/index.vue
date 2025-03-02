<template>
  <div
    class="p-10 bg-neutral-900 bg-no-repeat bg-cover text-neutral-100 h-screen overflow-y-auto flex flex-col justify-between"
    :style="{
      backgroundImage: `url(${backdropImage})`,
    }"
  >
    <!-- topbar -->
    <div class="flex items-center space-x-4">
      <div>Tv</div>

      <div class="flex w-full -space-x-px">
        <div
          class="border rounded-l-lg focus:bg-black/75 focus:border-white border-neutral-700 focus:outline-none px-2 w-full text-lg h-10"
        />
        <span>
          <Icon name="heroicons:magnifying-glass-20-solid" />
        </span>
      </div>
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

    <!-- horizontal menu -->
    <ul class="grid grid-cols-4 gap-10 items-end">
      <IndexMenuItem
        icon="solar:tv-line-duotone"
        title="Tv Ao vivo"
        description="+5000 canais"
        active
      />
      <IndexMenuItem
        icon="solar:clapperboard-play-line-duotone"
        title="Filmes"
        description="+1200 filmes"
      />
      <IndexMenuItem
        icon="solar:posts-carousel-vertical-bold-duotone"
        title="Séries"
        description="+1200 séries"
      />
      <IndexMenuItem
        icon="solar:radio-line-duotone"
        title="Rádios"
        description="+5000 estações"
      />
    </ul>
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
