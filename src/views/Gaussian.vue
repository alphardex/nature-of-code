<template>
  <div class="relative min-h-screen">
    <div class="gaussian w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/gaussian";

export default defineComponent({
  name: "Gaussian",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".gaussian") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
