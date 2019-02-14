<template>
  <text :x="width / 2" :y="height + 35" text-anchor="middle">
    <slot></slot>
  </text>
</template>

<script>
export default {
  name: "label-x",
  props: {
    width: Number,
    height: Number
  }
};
</script>
