<template>
  <div class="relative min-h-screen">
    <div class="seek w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/seek";

export default defineComponent({
  name: "Seek",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".seek") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
