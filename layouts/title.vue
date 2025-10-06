<template>
  <div class="slidev-layout title-slide h-full w-full flex items-center justify-center bg-primary">
    <div class="text-center px-12 max-w-5xl">
      <h1 class="text-8xl font-extrabold text-primary-content mb-10 leading-tight drop-shadow-lg">
        <slot name="title" />
      </h1>
      <h2 v-if="$slots.subtitle" class="text-4xl font-normal text-primary-content/90 mb-16 drop-shadow">
        <slot name="subtitle" />
      </h2>
      <div v-if="$slots.author" class="text-2xl text-primary-content/80 space-y-3">
        <slot name="author" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Title slide layout for presentation cover
</script>
