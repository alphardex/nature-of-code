<template>
  <div class="relative min-h-screen">
    <div class="static-wave w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/staticWave";

export default defineComponent({
  name: "StaticWave",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".static-wave") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
