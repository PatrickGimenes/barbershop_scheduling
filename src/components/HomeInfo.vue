<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>();
</script>

<template>
      <h1 class="font-bold  my-10 text-5xl lg:text-center">
      {{ title }}
    </h1>

    <p class="text-3xl mb-8 lg:text-center">
      {{ subtitle }}
    </p>
</template>
