<template>
  <div class="relative min-h-screen">
    <div class="pendulum-example w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/pendulumExample";

export default defineComponent({
  name: "PendulumExample",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".pendulum-example") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
