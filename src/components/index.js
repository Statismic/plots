import StatismicHistogram from "./Histogram.vue";
import StatismicScatterPlot from "./Scatter.vue";
import StatismicTrendline from "./Trendline.vue";

const components = {
  StatismicHistogram,
  StatismicScatterPlot,
  StatismicTrendline
};

export default {
  install(Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
