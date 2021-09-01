<template>
  <div class="relative min-h-screen">
    <div class="random-walker-tend w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/randomWalkerTend";

export default defineComponent({
  name: "RandomWalkerTend",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".random-walker-tend") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
