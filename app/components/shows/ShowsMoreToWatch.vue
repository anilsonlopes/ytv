<template>
  <div>
    <h5 class="text-center text-4xl font-bold">Mais para assistir</h5>
    <p class="text-center mt-2">
      <span class="text-red-400">Melhores escolhas:</span> programas de TV e
      filmes só para você
    </p>

    <div class="py-10 space-y-5">
      <div class="grid grid-cols-6 gap-5 -mx-10">
        <div class="w-full bg-neutral-600 h-72"></div>
        <div class="w-full bg-neutral-600 h-72"></div>
        <div class="w-full bg-neutral-600 h-72"></div>
        <div class="w-full bg-neutral-600 h-72"></div>
        <div class="w-full bg-neutral-600 h-72"></div>
        <div class="w-full bg-neutral-600 h-72"></div>
      </div>
      <div class="grid grid-cols-5 gap-5 -mx-10">
        <div class="w-full bg-neutral-600 h-96"></div>
        <div class="w-full bg-neutral-600 h-96"></div>
        <div class="w-full bg-neutral-600 h-96"></div>
        <div class="w-full bg-neutral-600 h-96"></div>
        <div class="w-full bg-neutral-600 h-96"></div>
      </div>
    </div>

    <div class="flex justify-center space-x-4">
      <nuxt-link to="#" class="border rounded px-4 py-2">
        Catálogo de séries
      </nuxt-link>
      <nuxt-link to="#" class="border rounded px-4 py-2">
        Mais popular
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
