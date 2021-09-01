<template>
  <div class="relative min-h-screen">
    <div class="motion-basic w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/motionBasic";

export default defineComponent({
  name: "MotionBasic",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".motion-basic") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
