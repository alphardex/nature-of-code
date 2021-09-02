<template>
  <div class="relative min-h-screen">
    <div class="harmonic-motion w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/harmonicMotion";

export default defineComponent({
  name: "HarmonicMotion",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".harmonic-motion") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
