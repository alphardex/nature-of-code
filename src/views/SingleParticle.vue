<template>
  <div class="relative min-h-screen">
    <div class="single-particle w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/singleParticle";

export default defineComponent({
  name: "SingleParticle",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".single-particle") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
