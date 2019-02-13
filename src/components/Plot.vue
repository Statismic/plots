<template>
  <svg ref="plot" width="100%" height="100%">
    <g :transform="`translate(${this.margin.left} ${this.margin.top})`">
      <component :is="type" :data="data" :width="width" :height="height" :options="options"></component>
    </g>
  </svg>
</template>

<script>
import ScatterPlot from "./Scatter";
import Trendline from "./Trendline";

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
      default: 0
    },
    marginLeft: {
      type: Number,
      default: 0
    },
    marginBottom: {
      type: Number,
      default: 0
    },
    marginRight: {
      type: Number,
      default: 0
    },
    options: Object
  },
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  computed: {
    margin() {
      const safe = num => {
        num = Number(num);
        return Number.isNaN(num) || !Number.isFinite(num) ? 0 : num;
      };

      return {
        top: safe(this.marginTop) + 20,
        left: safe(this.marginLeft) + 30,
        bottom: safe(this.marginBottom) + 20,
        right: safe(this.marginRight) + 20
      };
    }
  },
  methods: {
    onResize() {
      const { width, height } = this.$refs.plot.getBoundingClientRect();

      this.width = width - this.margin.left - this.margin.right;
      this.height = height - this.margin.top - this.margin.bottom;
    }
  },
  watch: {
    margin() {
      this.onResize();
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
    ScatterPlot,
    Trendline
  }
};
</script>


<style scoped>
svg >>> * {
  transition: all 1s;
}
</style>
