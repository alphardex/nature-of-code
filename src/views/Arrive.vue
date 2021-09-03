<template>
  <div class="relative min-h-screen">
    <div class="arrive w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/arrive";

export default defineComponent({
  name: "Arrive",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".arrive") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
