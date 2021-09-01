<template>
  <div class="relative min-h-screen">
    <div class="vector-normalize w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/vectorNormalize";

export default defineComponent({
  name: "VectorNormalize",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".vector-normalize") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
