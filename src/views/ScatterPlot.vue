<template>
  <plot
    type="scatter-plot"
    :data="data"
    :options="options"
    :margin-left="20"
    :margin-bottom="20"
    :margin-top="20"
    :margin-right="20"
  />
</template>

<script>
import Plot from "@/components/Plot.vue";

export default {
  components: {
    Plot
  },
  data() {
    return {
      data: [{ x: 0, y: 0 }, { x: 1, y: 7 }, { x: 3, y: 3 }, { x: 5, y: 5 }],
      options: {
        sizePoint: 3
      }
    };
  }
};
</script>
