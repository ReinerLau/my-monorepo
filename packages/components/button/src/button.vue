<template>
  <button :class="[ns.m(props.type)]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "hooks";
const props = defineProps<{
  type?: string;
}>();

const ns = useNamespace("button");
</script>
