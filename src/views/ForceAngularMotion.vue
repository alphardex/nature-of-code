<template>
  <div class="relative min-h-screen">
    <div class="force-angular-motion w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceAngularMotion";

export default defineComponent({
  name: "ForceAngularMotion",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".force-angular-motion") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
