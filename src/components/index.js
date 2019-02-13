import StatismicHistogram from "./Histogram.vue";
import Plot from "./Plot.vue";

const components = {
  StatismicHistogram,
  Plot
};

export default {
  install(Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
