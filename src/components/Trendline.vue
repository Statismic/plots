<template>
  <svg ref="plot" class="container">
    <y-axis :ctx="this"></y-axis>
    <x-axis :ctx="this"></x-axis>
    <y-label :ctx="this"></y-label>
    <x-label :ctx="this"></x-label>

    <path :d="path" stroke="black" fill="transparent" stroke-width="2"></path>

    <g v-for="(v, index) in dataX" :key="index">
      <text
        :x="convertX(v - minX)"
        :y="convertY(0) + 20"
        :fill="colorIndex"
        :font-size="sizeIndex"
        text-anchor="middle"
        v-if="index % indexMultiplierX === 0"
      >{{ v | round }}</text>
      <text
        :x="convertX(0) - 15"
        :y="convertY(dataY[index] - minY) + 5"
        :fill="colorIndex"
        :font-size="sizeIndex"
        text-anchor="middle"
        writing-mode="tb-rl"
        v-if="index % indexMultiplierY === 0"
      >{{ dataY[index] | round }}</text>

      <circle
        class="hover"
        :cx="convertX(v - minX)"
        :cy="convertY(dataY[index] - minY)"
        :r="sizePoint"
        :fill="colorPoint"
        @mouseover="activeIndex=index"
        @mouseout="activeIndex=-1"
      ></circle>

      <line
        :x1="convertX(0)"
        :y1="convertY(dataY[index] - minY)"
        :x2="convertX(v - minX)"
        :y2="convertY(dataY[index] - minY)"
        :stroke="colorHighlighter"
        stroke-dasharray="5 5"
        v-show="activeIndex===index"
      ></line>
      <line
        :x1="convertX(v - minX)"
        :y1="convertY(0)"
        :x2="convertX(v - minX)"
        :y2="convertY(dataY[index] - minY)"
        :stroke="colorHighlighter"
        stroke-dasharray="5 5"
        v-show="activeIndex===index"
      ></line>
    </g>
  </svg>
</template>

<script>
import BaseMixins from "./base";
import { XAxis, YAxis, XLabel, YLabel } from "./parts";

export default {
  /**
    data-y: an array of y values
    color-point: color for points in the plot
    color-highlighter: color for helper lines when you hover points
    size-point: sizes of points in the plot
   */
  mixins: [BaseMixins],
  props: {
    dataY: {
      type: Array,
      required: true
    },
    colorPoint: {
      type: String,
      default: "black"
    },
    colorHighlighter: {
      type: String,
      default: "black"
    },
    sizePoint: {
      type: String,
      default: "5"
    }
  },
  data() {
    return {
      activeIndex: -1 // Index based on xdata
    };
  },
  computed: {
    minX() {
      return this.safe(Math.min(...this.dataX));
    },
    minY() {
      return this.safe(Math.min(...this.dataY));
    },
    height() {
      const max = this.safe(Math.max(...this.dataY));
      const diff = max - this.minY;
      return diff === 0 ? 1 : diff;
    },
    width() {
      const max = this.safe(Math.max(...this.dataX));
      const diff = max - this.minX;
      return diff === 0 ? 1 : diff;
    },
    path() {
      if (this.dataX.length < 2) return "";
      let paths = [];
      const x = this.dataX;
      const y = this.dataY;

      paths.push(
        `M${this.convertX(x[0] - this.minX)},${this.convertY(y[0] - this.minY)}`
      );
      for (let i = 1; i < x.length; i++)
        paths.push(
          `L${this.convertX(x[i] - this.minX)},${this.convertY(
            y[i] - this.minY
          )}`
        );

      return paths.join(" ");
    },
    indexMultiplierX() {
      return Math.ceil(this.dataX.length / this.nIndexX);
    },
    indexMultiplierY() {
      return Math.ceil(this.dataY.length / this.nIndexY);
    }
  },
  components: {
    YAxis,
    XAxis,
    XLabel,
    YLabel
  }
};
</script>

<style scoped>
@import "./base.css";
</style>
