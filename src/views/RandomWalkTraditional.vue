<template>
  <div class="relative min-h-screen">
    <div
      class="random-walk-traditional w-screen h-screen flex-center bg-black-1"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/randomWalkTraditional";

export default defineComponent({
  name: "RandomWalkTraditional",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".random-walk-traditional") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
