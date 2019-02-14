<template>
  <g>
    <!-- Axes -->
    <g v-axis:y="{scale: scale, chain: gridFn}"></g>
    <g v-axis:x="{scale: scale}" :transform="`translate(0, ${height})`"></g>

    <!-- Axes Labels -->
    <label-x :width="width" :height="height">{{ this.options.labelX }}</label-x>
    <label-y :width="width" :height="height">{{ this.options.labelY }}</label-y>

    <!-- Title -->
    <chart-title :width="width" :height="height">{{ this.options.title }}</chart-title>

    <g v-for="(v, index) in data" :key="index">
      <!-- Points -->
      <rect
        :x="scale.x(v.x)"
        :y="-height"
        :width="barWidth"
        :height="height - scale.y(v.y)"
        transform="scale(1,-1)"
        :fill="_options.barColor"
        :stroke="_options.barStrokeColor"
        :stroke-width="_options.barStrokeWidth"
        class="bar"
      />
    </g>
  </g>
</template>

<script>
import d3 from "@/assets/d3";
import base from "./base";
import { LabelX, LabelY, ChartTitle } from "./parts";

export default {
  name: "histogram",
  mixins: [base],
  components: {
    LabelX,
    LabelY,
    ChartTitle
  },
  data() {
    return {};
  },
  computed: {
    scale() {
      const x = d3
        .scaleBand()
        .domain(this.data.map(v => v["x"]))
        .rangeRound([0, this.width]);

      const y = d3
        .scaleLinear()
        .domain([0, Math.max(...this.data.map(v => v["y"]))])
        .rangeRound([this.height, 0]);

      return { x, y };
    },
    barWidth() {
      return this.width / (this.data.length === 0 ? 1 : this.data.length);
    },
    // options after normalized
    _options() {
      return {
        ...{
          title: "",
          labelX: "",
          labelY: "",
          barColor: "blue",
          barStrokeColor: "black",
          barStrokeWidth: "2"
        },
        ...this.options
      };
    }
  },
  methods: {
    gridFn(axisObj) {
      return axisObj.tickSize(-this.width, 0, 0);
    }
  }
};
</script>

<style scoped>
.bar:hover {
  cursor: pointer;
  opacity: 0.75;
}
</style>
