import Plot from "./Plot.vue";

const components = {
  Plot
};

export default {
  install(Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
