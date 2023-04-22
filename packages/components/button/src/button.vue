<template>
  <button :class="[ns.m(props.type)]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "hooks";
import { buttonProps } from "./button";

const props = defineProps(buttonProps);
const ns = useNamespace("button");
</script>
