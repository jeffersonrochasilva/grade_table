<template>
  <div class="home">
    <Drawer />
    <div class="home__container">
      <AppBar />
      <div class="home__container__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Drawer from "@/components/commom/Drawer.vue";
import AppBar from "@/components/commom/GeneralFilter.vue";
export default {
  components: {
    Drawer,
    AppBar,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  &__container {
    width: calc(100% - 300px);
    border: 1px solid red;
  }
}
</style>
