import Plot from "./Plot.vue";

export { Plot };

export default {
  install(Vue) {
    Vue.component("plot", Plot);
  }
};
