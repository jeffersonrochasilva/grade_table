<template>
  <div class="loading">
    <div class="loading__center"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    overlay: false,
  }),

  watch: {},
};
</script>
<style lang="scss" scoped>
.loading {
  background: rgba(26, 25, 25, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 98;
  &__center {
    width: 90px;
    height: 90px;
    z-index: 99;
    border-radius: 50%;
    border-top: 3px solid red;
    animation: loading 1s linear infinite;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
