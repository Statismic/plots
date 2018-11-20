import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Histogram from "./views/Histogram.vue";
import ScatterPlot from "./views/ScatterPlot.vue";
import Trendline from "./views/Trendline.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/histogram",
      name: "histogram",
      component: Histogram
    },
    {
      path: "/scatter-plot",
      name: "scatter-plot",
      component: ScatterPlot
    },
    {
      path: "/trendline",
      name: "trendline",
      component: Trendline
    }
  ]
});
