<template>
  <li>
    <nuxt-link
      class="h-96 bg-neutral-800/40 rounded border border-neutral-500 backdrop-blur-lg p-5 flex flex-col justify-between"
      :class="{ 'bg-neutral-700 border-neutral-200': active }"
      :to="to || '#'"
    >
      <div>
        <slot name="head" />
      </div>
      <div>
        <Icon :name="icon" size="4rem" />
        <div class="text-2xl font-semibold">
          {{ title }}
        </div>
        <div class="opacity-50 text-lg">
          {{ description }}
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
  active?: boolean;
  to?: RouteLocationRaw;
}>();
</script>

<style></style>
