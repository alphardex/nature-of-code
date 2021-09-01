<template>
  <div class="relative min-h-screen">
    <div class="vector-substraction w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/vectorSubstraction";

export default defineComponent({
  name: "VectorSubstraction",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".vector-substraction") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
