<template>
  <div class="relative min-h-screen">
    <div class="motion-acceleration-mouse w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/motionAccelerationMouse";

export default defineComponent({
  name: "MotionAccelerationMouse",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".motion-acceleration-mouse") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
