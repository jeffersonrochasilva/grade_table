<template>
  <div class="drawer">
    <div class="drawer__perfil">
      <div class="drawer__perfil__title">
        <span>João Rocha</span>
        <p>{{ formatCpf(cpf) }}</p>
      </div>
      <img src="@/assets/perfil.jpg" alt="" />
    </div>
    <v-divider />

    <div class="drawer__navigation">
      <div
        :class="`drawer__navigation--${step === i ? 'altern' : 'box'}`"
        v-for="(item, i) in items"
        :key="i"
        @click="setStep((step = i))"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: "00000000000",
      step: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
  methods: {
    formatCpf(item) {
      const arr = item.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  width: 300px;
  height: 100%;
  border-right: 0.5px solid #dcdcdc;
  &__perfil {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__title {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        font-size: 20px;
        font-family: sans-serif;
      }
      p {
        font-size: 15px;
        font-family: sans-serif;
      }
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  &__navigation {
    margin-top: 10px;
    padding-left: 20px;
    cursor: pointer;
    &--box {
      height: 50px;
      width: 90%;
      margin-top: 10px;
      border-radius: 4px;
      padding-left: 10px;
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
        font-family: sans-serif;
        margin-left: 20px;
      }
    }
    &--altern {
      background: #00fa9a;
      height: 50px;
      width: 90%;
      margin-top: 10px;
      padding-left: 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
        font-family: sans-serif;
        margin-left: 20px;
      }
    }
  }
}
</style>
