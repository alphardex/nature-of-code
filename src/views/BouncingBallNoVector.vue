<template>
  <div class="relative min-h-screen">
    <div
      class="bouncing-ball-no-vector w-screen h-screen flex-center bg-black-1"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/bouncingBallNoVector";

export default defineComponent({
  name: "BouncingBallNoVector",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".bouncing-ball-no-vector") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
