<template>
  <text :x="width / 2" :y="-25" text-anchor="middle" class="title">
    <slot></slot>
  </text>
</template>

<script>
export default {
  name: "chart-title",
  props: {
    width: Number,
    height: Number
  }
};
</script>

<style scoped>
.title {
  font-size: larger;
  font-weight: bold;
}
</style>
