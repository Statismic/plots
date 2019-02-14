import d3 from "@/assets/d3";

export default {
  props: {
    width: Number,
    height: Number,
    data: Array,
    options: Object
  },
  directives: {
    axis(el, binding) {
      const axis = binding.arg;
      const axisMethod = { x: "axisBottom", y: "axisLeft" }[axis];
      const scale = binding.value["scale"][axis];
      const chainFn = binding.value["chain"];

      let axisObj = d3[axisMethod](scale);
      if (chainFn !== undefined) {
        axisObj = chainFn(axisObj);
      }
      d3.select(el).call(axisObj);
    }
  }
};
