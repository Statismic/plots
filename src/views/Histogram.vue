<template>
  <div>
    <plot type="histogram" :data="data" style="height: 600px;"/>
    <button @click="add" style="margin: 60px auto;">Add</button>
  </div>
</template>

<script>
import Plot from "@/components/Plot.vue";

export default {
  components: {
    Plot
  },
  data() {
    return {
      data: [{ x: "Golang", y: 300 }, { x: "C", y: 100 }]
    };
  },
  methods: {
    add() {
      this.data.push({
        x: "random",
        y: Math.floor(Math.random() * Math.floor(1000))
      });
    }
  }
};
</script>
