<template>
  <div
    class="p-10 bg-neutral-900 bg-no-repeat bg-cover text-neutral-100 h-screen overflow-y-auto flex flex-col justify-between"
    style="
      background-image: url(https://images.unsplash.com/photo-1606937295547-bc0f668595b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    "
  >
    <!-- topbar -->
    <div class="flex items-center space-x-4">
      <div>Tv</div>

      <div class="flex w-full">
        <input
          type="text"
          class="border rounded-l-full border-neutral-700 w-full text-lg h-10"
        />
        <button
          type="button"
          class="h-10 rounded-r-full border border-neutral-700 w-20 flex items-center justify-center"
        >
          <Icon name="heroicons:magnifying-glass-20-solid" />
        </button>
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

<script lang="ts" setup></script>

<style></style>
