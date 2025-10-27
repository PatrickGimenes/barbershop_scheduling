<script setup lang="ts">
defineProps<{
  name: string;
  method: () => void;
  textColor?: string;      // cor do texto
  bgColor?: string;        // cor de fundo
  hoverColor?: string;     // cor de hover
  width?: string;          // largura do botão
  height?: string;         // altura do botão
  textSize?: string;       // tamanho do texto
}>();
</script>

<template>
  <button
    @click="method"
    :class="[
      bgColor || 'bg-gold',
      textColor || 'text-black',
      textSize || 'text-2xl',
      width || 'w-56',
      height || 'h-14',
      'font-bold rounded-sm transition duration-200',
      hoverColor ? `hover:${hoverColor}` : 'hover:opacity-90'
    ]"
  >
    {{ name }}
  </button>
</template>
