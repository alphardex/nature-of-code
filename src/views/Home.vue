<template>
  <div class="relative min-h-screen">
    <ul>
      <li>
        1.Introduction
      </li>
      <li>
        <router-link :to="{ name: 'RandomWalkTraditional' }">
          RandomWalkTraditional
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'RandomDistribution' }">
          RandomDistribution
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'RandomWalkerTend' }">
          RandomWalkerTend
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Gaussian' }">
          Gaussian
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'PerlinNoise' }">
          PerlinNoise
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped></style>
