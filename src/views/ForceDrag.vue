<template>
  <div class="relative min-h-screen">
    <div class="force-drag w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceDrag";

export default defineComponent({
  name: "ForceDrag",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".force-drag") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
