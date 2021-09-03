<template>
  <div class="relative min-h-screen">
    <div class="system-generator w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/systemGenerator";

export default defineComponent({
  name: "SystemGenerator",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".system-generator") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
