<template>
  <div class="relative min-h-screen">
    <div class="perlin-noise w-screen h-screen flex-center bg-black-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/perlinNoise";

export default defineComponent({
  name: "PerlinNoise",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".perlin-noise") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
