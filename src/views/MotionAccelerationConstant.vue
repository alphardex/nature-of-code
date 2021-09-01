<template>
  <div class="relative min-h-screen">
    <div
      class="motion-acceleration-constant w-screen h-screen flex-center"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/motionAccelerationConstant";

export default defineComponent({
  name: "MotionAccelerationConstant",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".motion-acceleration-constant") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
