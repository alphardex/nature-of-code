<template>
  <div class="relative min-h-screen">
    <div class="force-basic w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceBasic";

export default defineComponent({
  name: "ForceBasic",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".force-basic") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
