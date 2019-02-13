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

      <path fill="none" stroke="black" :d="path"/>
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
import base from "./base";

export default {
  name: "trendline",
  mixins: [base],
  data() {
    return {
      activeIndex: -1,
      lineGenerator: d3
        .line()
        .x(v => this.scale.x(v.x))
        .y(v => this.scale.y(v.y))
        .curve(d3.curveNatural)
    };
  },
  computed: {
    path() {
      console.log(this.data);
      return this.lineGenerator(this.data);
    },
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
  }
};
</script>

<style scoped>
</style>
