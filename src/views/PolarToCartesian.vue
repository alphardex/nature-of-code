<template>
  <div class="relative min-h-screen">
    <div class="polar-to-cartesian w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/polarToCartesian";

export default defineComponent({
  name: "PolarToCartesian",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".polar-to-cartesian") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
