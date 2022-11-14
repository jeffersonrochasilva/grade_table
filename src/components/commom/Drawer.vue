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
        @click="setStep(i)"
      >
        <div class="drawer__navigation__description">
          <v-icon>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </div>
        <div
          v-if="step === i"
          v-for="(item, index) in item.category"
          :key="index"
          @click="$router.push({ name: item.routerName })"
          class="drawer__navigation__content"
        >
          <v-icon>{{ item.otherIcon }}</v-icon>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: "08539020135",
      step: false,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          category: [
            {
              name: "Home",
              otherIcon: "mdi-home",
              routerName: "cardsdirection",
            },
            {
              name: "Tabela",
              otherIcon: "mdi-table-of-contents",
              routerName: "table",
            },
            {
              name: "slider",
              otherIcon: "mdi-chart-line-stacked",
              routerName: "slider",
            },
            {
              name: "Graficos",
              otherIcon: "mdi-chart-line-stacked",
              routerName: "",
            },
          ],
          otherIcon: "mdi-chart-line-stacked",
        },
        {
          title: "Cadastros",
          icon: "mdi-format-list-bulleted",
          category: [
            {
              name: "Alunos",
              otherIcon: "mdi-account",
              routerName: "students",
            },
            {
              name: "faxineiros",
              otherIcon: "mdi-spray-bottle",
              routerName: "janitor",
            },
            {
              name: "Merendeira",
              otherIcon: "mdi-stove",
              routerName: "",
            },
            {
              name: "Poteiro",
              otherIcon: "mdi-account-key",
              routerName: "port",
            },
          ],
          otherIcon: "mdi-chart-line-stacked",
        },
        {
          title: "Controle",
          icon: "mdi-help-box",
          category: [
            {
              name: "Dispensa",
              otherIcon: "mdi-food-apple",
              routerName: "dispensa",
            },
            {
              name: "Graficos",
              otherIcon: "mdi-chart-line-stacked",
              routerName: "",
            },
            {
              name: "Graficos",
              otherIcon: "mdi-chart-line-stacked",
              routerName: "",
            },
            {
              name: "Graficos",
              otherIcon: "mdi-chart-line-stacked",
              routerName: "",
            },
          ],
          otherIcon: "mdi-chart-line-stacked",
        },
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
    setStep(i) {
      setTimeout(() => {
        this.step = i;
      }, 110);
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  width: 300px;
  height: 100%;
  border-right: 0.5px solid #acaaaa;
  background: #fff;

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
        color: #454d6b;
        font-family: sans-serif;
        font-size: 19px;
        font-weight: bold;
      }
      p {
        font-size: 15px;
        font-family: sans-serif;
        font-weight: bold;
        color: #454d6b;
        margin-top: 5px;
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
    &__description {
      width: 100%;
      height: 50px;
      padding-bottom: 30px;

      display: flex;
      align-items: center;
    }
    &__content {
      height: 30px;
      padding-left: 20px;
      display: flex;
      align-items: center;
    }
    &--box {
      height: 50px;
      width: 90%;
      padding-top: 20px;
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
      // background: #d1d7f0;
      background: #fff;
      width: 90%;
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      animation-name: colapsy;
      animation-duration: 0.1s;
      position: relative;
      animation-timing-function: ease;
      span {
        font-size: 15px;
        font-family: sans-serif;
        margin-left: 20px;
      }
    }
  }
}
@keyframes colapsy {
  0% {
    height: 50px;
  }
  100% {
    height: 110px;
  }
}
</style>
