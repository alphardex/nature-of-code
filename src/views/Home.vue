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
        <li>
          <router-link :to="{ name: 'MotionAccelerationMouse' }">
            MotionAccelerationMouse
          </router-link>
        </li>
      </ul>
    </section>
    <section>
      <h1>2. Force</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'ForceBasic' }">
            ForceBasic
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForceFriction' }">
            ForceFriction
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForceDrag' }">
            ForceDrag
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForceAttraction' }">
            ForceAttraction
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForceAttractionMutual' }">
            ForceAttractionMutual
          </router-link>
        </li>
      </ul>
    </section>
    <section>
      <h1>3. Oscillation</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'AngularMotion' }">
            AngularMotion
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ForceAngularMotion' }">
            ForceAngularMotion
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PointingVelocity' }">
            PointingVelocity
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PolarToCartesian' }">
            PolarToCartesian
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'HarmonicMotion' }">
            HarmonicMotion
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'HarmonicMotionAngularVelocity' }">
            HarmonicMotionAngularVelocity
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OscillatorObject' }">
            OscillatorObject
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'StaticWave' }">
            StaticWave
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PendulumExample' }">
            PendulumExample
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'SpringExample' }">
            SpringExample
          </router-link>
        </li>
      </ul>
    </section>
    <section>
      <h1>4. Particle System</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'SingleParticle' }">
            SingleParticle
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ArrayParticles' }">
            ArrayParticles
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ParticleSystem' }">
            ParticleSystem
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
