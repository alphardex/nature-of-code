<template>
  <div class="relative min-h-screen">
    <div class="force-attraction-mutual w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/forceAttractionMutual";

export default defineComponent({
  name: "ForceAttractionMutual",
  setup() {
    const start = () => {
      new p5(
        sketch,
        document.querySelector(".force-attraction-mutual") as HTMLElement
      );
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
