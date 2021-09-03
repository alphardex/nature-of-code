<template>
  <div class="relative min-h-screen">
    <div class="particles-inheritance w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/particlesInheritance";

export default defineComponent({
  name: "ParticlesInheritance",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".particles-inheritance") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
