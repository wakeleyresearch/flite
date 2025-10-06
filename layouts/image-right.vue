<template>
  <div class="slidev-layout image-right h-full w-full flex p-12 gap-8">
    <div class="flex-1 flex flex-col justify-center">
      <h1 v-if="$slots.title" class="mb-6">
        <slot name="title" />
      </h1>
      <div class="text-content">
        <slot />
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <slot name="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Layout with content on left and image/chart on right
</script>
