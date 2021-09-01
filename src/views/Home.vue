<template>
  <div class="relative min-h-screen">
    <section>
      <h1>0.Introduction</h1>
      <ul>
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
    </section>
    <section>
      <h1>1.Vector</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'BouncingBallNoVector' }">
            BouncingBallNoVector
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'BouncingBallWithVector' }">
            BouncingBallWithVector
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'VectorSubstraction' }">
            VectorSubstraction
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'VectorMagnitude' }">
            VectorMagnitude
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'VectorNormalize' }">
            VectorNormalize
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MotionBasic' }">
            MotionBasic
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MotionAccelerationConstant' }">
            MotionAccelerationConstant
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MotionAccelerationRandom' }">
            MotionAccelerationRandom
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped></style>
