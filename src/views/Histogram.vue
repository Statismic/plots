<template>
<div>
  <histogram label-x="X Label" label-y="Y Label" :data-x="xdata" :interval="0.1" style="height: 600px;"/>
  <button @click="add" style="margin: 60px auto;">Add</Button>
</div>
</template>

<script>
import Histogram from "@/components/Histogram.vue";

export default {
  components: {
    Histogram
  },
  data() {
    return {
      xdata: [0.9]
    };
  },
  methods: {
    add() {
      this.xdata.push(Math.random());
    }
  }
};
</script>
