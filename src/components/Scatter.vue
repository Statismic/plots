<template>
  <g>
    <g v-for="(v, index) in data" :key="index">
      <circle
        :cx="scale.x(v.x)"
        :cy="scale.y(v.y)"
        :r="_options.sizePoint"
        @mouseover="activeIndex = index"
        @mouseout="activeIndex = -1"
        style="cursor: pointer"
      />

      <line
        :x1="scale.x(0)"
        :y1="scale.y(v.y)"
        :x2="scale.x(v.x)"
        :y2="scale.y(v.y)"
        stroke="black"
        stroke-dasharray="5 5"
        v-show="activeIndex===index"
      ></line>

      <line
        :x1="scale.x(v.x)"
        :y1="scale.y(0)"
        :x2="scale.x(v.x)"
        :y2="scale.y(v.y)"
        stroke="black"
        stroke-dasharray="5 5"
        v-show="activeIndex===index"
      ></line>
    </g>

    <g v-axis:y="scale"></g>
    <g v-axis:x="scale" :transform="`translate(0, ${height})`"></g>
  </g>
</template>

<script>
import d3 from "@/assets/d3";

export default {
  name: "scatter-plot",
  props: {
    width: Number,
    height: Number,
    data: Array,
    options: Object
  },
  data() {
    return {
      activeIndex: -1
    };
  },
  computed: {
    scale() {
      const x = d3
        .scaleLinear()
        .domain([0, Math.max(...this.data.map(v => v["x"]))])
        .rangeRound([0, this.width]);

      const y = d3
        .scaleLinear()
        .domain([0, Math.max(...this.data.map(v => v["y"]))])
        .rangeRound([this.height, 0]);

      return { x, y };
    },
    // options after normalized
    _options() {
      return {
        ...{
          sizePoint: 3
        },
        ...this.options
      };
    }
  },
  directives: {
    axis(el, binding) {
      const axis = binding.arg;
      const axisMethod = { x: "axisBottom", y: "axisLeft" }[axis];
      const methodArg = binding.value[axis];

      d3.select(el).call(d3[axisMethod](methodArg));
    }
  }
};
</script>

<style scoped>
</style>
