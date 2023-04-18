<template>
  <button :class="cls">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string;
}>();

const cls = _bem("button", props.type);

function _bem(block: string, modifier?: string) {
  let cls = `el-${block}`;
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
</script>
