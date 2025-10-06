<template>
  <div class="slidev-layout two-cols h-full w-full flex flex-col p-12">
    <h1 v-if="$slots.title" class="mb-8">
      <slot name="title" />
    </h1>
    <div class="flex-1 flex gap-8">
      <div class="flex-1 flex flex-col">
        <slot name="left" />
      </div>
      <div class="flex-1 flex flex-col">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Two-column layout for side-by-side content
</script>
