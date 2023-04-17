<template>
  <button :class="cls">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string;
}>();

const cls = _bem(props.type);

function _bem(modifier?: string) {
  let cls = "el-button";
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
</script>
