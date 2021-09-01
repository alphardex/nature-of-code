<template>
  <div class="relative min-h-screen">
    <div class="motion-acceleration-random w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/motionAccelerationRandom";

export default defineComponent({
  name: "MotionAccelerationRandom",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".motion-acceleration-random") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
