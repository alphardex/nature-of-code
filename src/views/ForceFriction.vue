<template>
  <div class="relative min-h-screen">
    <div class="force-friction w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceFriction";

export default defineComponent({
  name: "ForceFriction",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".force-friction") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
