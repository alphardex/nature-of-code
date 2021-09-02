<template>
  <div class="relative min-h-screen">
    <div
      class="harmonic-motion-angular-velocity w-screen h-screen flex-center"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/harmonicMotionAngularVelocity";

export default defineComponent({
  name: "HarmonicMotionAngularVelocity",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(
          ".harmonic-motion-angular-velocity"
        ) as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
