<template>
  <div class="relative min-h-screen">
    <div class="spring-example w-screen h-screen flex-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import sketch from "@/scenes/springExample";

export default defineComponent({
  name: "SpringExample",
  setup() {
    const start = () => {
      new p5(sketch, document.querySelector(".spring-example") as HTMLElement);
    };
    onMounted(() => {
      start();
    });
  },
});
</script>

<style lang="scss" scoped></style>
