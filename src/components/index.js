import Vue from "vue";
import StatismicHistogram from "./Histogram.vue";
import StatismicScatterPlot from "./Scatter.vue";
import StatismicTrendline from "./Trendline.vue";

const components = {
  StatismicHistogram,
  StatismicScatterPlot,
  StatismicTrendline
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;
