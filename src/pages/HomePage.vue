<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        GREGSLIST
      </h1>
      <h2>Make a page selection.</h2>
      <h4>Or don't. Totally up to you.</h4>
      <!-- NOTE router-link should be used whenever clicking something should take you to a new place -->
      <!-- <button class="btn btn-primary" @click="goToCarsPage">Cars link via Code</button> -->
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const router = useRouter()
    return {
      goToCarsPage() {
        logger.log('Going to the cars page now')
        // NOTE router.push should be used only for automatically navigating the user when certain code process are done
        router.push({ name: 'Cars' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
