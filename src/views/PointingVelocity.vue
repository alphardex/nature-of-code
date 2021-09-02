<template>
  <div class="relative min-h-screen">
    <div class="pointing-velocity w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/pointingVelocity";

export default defineComponent({
  name: "PointingVelocity",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".pointing-velocity") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
