<template>
  <div class="relative min-h-screen">
    <div class="particle-system w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/particleSystem";

export default defineComponent({
  name: "ParticleSystem",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".particle-system") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
