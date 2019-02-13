<template>
  <svg ref="plot" width="100%" height="100%">
    <g :transform="`translate(${marginLeft} ${marginTop})`">
      <component :is="type" :data="data" :width="width" :height="height" :options="options"></component>
    </g>
  </svg>
</template>

<script>
import ScatterPlot from "./Scatter";

export default {
  name: "plot",
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    marginTop: {
      type: Number,
      default: 20
    },
    marginLeft: {
      type: Number,
      default: 30
    },
    marginBottom: {
      type: Number,
      default: 20
    },
    marginRight: {
      type: Number,
      default: 20
    },
    options: Object
  },
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  methods: {
    onResize() {
      const { width, height } = this.$refs.plot.getBoundingClientRect();
      this.width = width - this.marginLeft - this.marginRight;
      this.height = height - this.marginTop - this.marginBottom;
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  components: {
    ScatterPlot
  }
};
</script>
