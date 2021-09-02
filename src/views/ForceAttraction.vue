<template>
  <div class="relative min-h-screen">
    <div class="force-attraction w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceAttraction";

export default defineComponent({
  name: "ForceAttraction",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".force-attraction") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
