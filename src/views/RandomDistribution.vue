<template>
  <div class="relative min-h-screen">
    <div class="random-distribution w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/randomDistribution";

export default defineComponent({
  name: "RandomDistribution",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".random-distribution") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
