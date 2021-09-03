<template>
  <div class="relative min-h-screen">
    <div class="particles-repeller w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/particlesRepeller";

export default defineComponent({
  name: "ParticlesRepeller",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".particles-repeller") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
