import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import RandomWalkTraditional from "../views/RandomWalkTraditional.vue";
import RandomDistribution from "../views/RandomDistribution.vue";
import RandomWalkerTend from "../views/RandomWalkerTend.vue";
import Gaussian from "../views/Gaussian.vue";
import PerlinNoise from "../views/PerlinNoise.vue";
import BouncingBallNoVector from "../views/BouncingBallNoVector.vue";
import BouncingBallWithVector from "../views/BouncingBallWithVector.vue";
import VectorSubstraction from "../views/VectorSubstraction.vue";
import VectorMagnitude from "../views/VectorMagnitude.vue";
import VectorNormalize from "../views/VectorNormalize.vue";
import MotionBasic from "../views/MotionBasic.vue";
import MotionAccelerationConstant from "../views/MotionAccelerationConstant.vue";
import MotionAccelerationRandom from "../views/MotionAccelerationRandom.vue";
import MotionAccelerationMouse from "../views/MotionAccelerationMouse.vue";
import ForceBasic from "../views/ForceBasic.vue";
import ForceFriction from "../views/ForceFriction.vue";
import ForceDrag from "../views/ForceDrag.vue";
import ForceAttraction from "../views/ForceAttraction.vue";
import ForceAttractionMutual from "../views/ForceAttractionMutual.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/random-walk-traditional",
    name: "RandomWalkTraditional",
    component: RandomWalkTraditional,
  },
  {
    path: "/random-distribution",
    name: "RandomDistribution",
    component: RandomDistribution,
  },
  {
    path: "/random-walker-tend",
    name: "RandomWalkerTend",
    component: RandomWalkerTend,
  },
  {
    path: "/gaussian",
    name: "Gaussian",
    component: Gaussian,
  },
  {
    path: "/perlin-noise",
    name: "PerlinNoise",
    component: PerlinNoise,
  },
  {
    path: "/bouncing-ball-no-vector",
    name: "BouncingBallNoVector",
    component: BouncingBallNoVector,
  },
  {
    path: "/bouncing-ball-with-vector",
    name: "BouncingBallWithVector",
    component: BouncingBallWithVector,
  },
  {
    path: "/vector-substraction",
    name: "VectorSubstraction",
    component: VectorSubstraction,
  },
  {
    path: "/vector-magnitude",
    name: "VectorMagnitude",
    component: VectorMagnitude,
  },
  {
    path: "/vector-normalize",
    name: "VectorNormalize",
    component: VectorNormalize,
  },
  {
    path: "/motion-basic",
    name: "MotionBasic",
    component: MotionBasic,
  },
  {
    path: "/motion-acceleration-constant",
    name: "MotionAccelerationConstant",
    component: MotionAccelerationConstant,
  },
  {
    path: "/motion-acceleration-random",
    name: "MotionAccelerationRandom",
    component: MotionAccelerationRandom,
  },
  {
    path: "/motion-acceleration-mouse",
    name: "MotionAccelerationMouse",
    component: MotionAccelerationMouse,
  },
  {
    path: "/force-basic",
    name: "ForceBasic",
    component: ForceBasic,
  },
  {
    path: "/force-friction",
    name: "ForceFriction",
    component: ForceFriction,
  },
  {
    path: "/force-drag",
    name: "ForceDrag",
    component: ForceDrag,
  },
  {
    path: "/force-attraction",
    name: "ForceAttraction",
    component: ForceAttraction,
  },
  {
    path: "/force-attraction-mutual",
    name: "ForceAttractionMutual",
    component: ForceAttractionMutual,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name !== from.name) {
      return { top: 0, left: 0 };
    }
  },
});

export default router;
