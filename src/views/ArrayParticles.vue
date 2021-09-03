<template>
  <div class="relative min-h-screen">
    <div class="array-particles w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/arrayParticles";

export default defineComponent({
  name: "ArrayParticles",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".array-particles") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
