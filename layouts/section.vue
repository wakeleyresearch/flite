<template>
  <div class="slidev-layout section-slide h-full w-full flex items-center justify-center bg-neutral">
    <div class="text-center px-12">
      <h1 class="text-7xl font-extrabold text-neutral-content mb-8 drop-shadow-lg">
        <slot />
      </h1>
      <div v-if="$slots.subtitle" class="text-3xl text-neutral-content/90 drop-shadow">
        <slot name="subtitle" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Section divider layout
</script>
