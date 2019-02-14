<template>
  <text :x="-35" :y="height / 2" writing-mode="vertical-lr" text-anchor="middle">
    <slot></slot>
  </text>
</template>

<script>
export default {
  name: "label-y",
  props: {
    width: Number,
    height: Number
  }
};
</script>
