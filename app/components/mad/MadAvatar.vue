<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";

const madAvatarVariant = cva(
  "inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
  }
);

type MadAvatarVariants = VariantProps<typeof madAvatarVariant>;

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    class?: HTMLAttributes["class"];
    size?: MadAvatarVariants["size"];
    shape?: MadAvatarVariants["shape"];
  }>(),
  {
    size: "sm",
    shape: "circle",
    alt: "Avatar",
  }
);
</script>

<template>
  <div :class="cn(madAvatarVariant({ size, shape }), props.class)">
    <img v-if="src" :src="src" :alt="alt" />
    <div v-else>
      <Icon name="heroicons:user-circle-16-solid" size="2rem" />
    </div>
  </div>
</template>
