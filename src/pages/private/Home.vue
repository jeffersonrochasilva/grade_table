<template>
  <div class="home">
    <Drawer />
    <div class="home__container">
      <AppBar />
      <div class="home__container__content">
        <router-view />
        <v-navigation-drawer
          temporary
          v-model="navigationState"
          location="right"
          width="507"
        >
          <slot />
        </v-navigation-drawer>
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
    navigationState: false,
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
    &__content {
      padding: 60px 80px;
      background: #eaeaea;
      height: calc(100% - 101px);
    }
  }
}
</style>
