<template>
  <div class="relative min-h-screen">
    <div class="oscillator-object w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/oscillatorObject";

export default defineComponent({
  name: "OscillatorObject",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".oscillator-object") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
