<template>
  <div class="relative min-h-screen">
    <div class="bouncing-ball-with-vector w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/bouncingBallWithVector";

export default defineComponent({
  name: "BouncingBallWithVector",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".bouncing-ball-with-vector") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
