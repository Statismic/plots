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
      const methodArg = binding.value[axis];

      d3.select(el).call(d3[axisMethod](methodArg));
    }
  }
};
