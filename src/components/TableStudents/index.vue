<template>
  <div class="table">
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
    </div>
    <div class="table__content" v-for="(item, i) in students" :kye="i">
      <div class="table__content__checkbox">
        <v-checkbox @click="getItemList(item)" />
      </div>
      <div class="table__content__id">
        <span>{{ item.id }}</span>
      </div>
      <div class="table__content__email">
        <span>{{ item.email }}</span>
      </div>
      <div class="table__content__name">
        <span>{{ item.nome }}</span>
      </div>

      <div class="table__content__box">
        <v-icon class="table__content__box__icon">mdi-clipboard-account</v-icon>
      </div>
      <div class="table__content__button">
        <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
      </div>
      <div class="table__content" v-for="(item, i) in students" :kye="i">
        <div class="table__content__checkbox">
          <v-checkbox @click="getItemList(item)" />
        </div>
        <div class="table__content__id">
          <span>{{ item.id }}</span>
        </div>
        <div class="table__content__email">
          <span>{{ item.email }}</span>
        </div>
        <div class="table__content__name">
          <span>{{ item.nome }}</span>
        </div>

        <div class="table__content__box">
          <v-icon class="table__content__box__icon"
            >mdi-clipboard-account</v-icon
          >
        </div>
        <div class="table__content__button">
          <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
        </div>
      </div>
      <div class="table__content" v-for="(item, i) in students" :kye="i">
        <div class="table__content__checkbox">
          <v-checkbox @click="getItemList(item)" />
        </div>
        <div class="table__content__id">
          <span>{{ item.id }}</span>
        </div>
        <div class="table__content__email">
          <span>{{ item.email }}</span>
        </div>
        <div class="table__content__name">
          <span>{{ item.nome }}</span>
        </div>

        <div class="table__content__box">
          <v-icon class="table__content__box__icon"
            >mdi-clipboard-account</v-icon
          >
        </div>
        <div class="table__content__button">
          <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
        </div>
      </div>
      <div class="table__content" v-for="(item, i) in students" :kye="i">
        <div class="table__content__checkbox">
          <v-checkbox @click="getItemList(item)" />
        </div>
        <div class="table__content__id">
          <span>{{ item.id }}</span>
        </div>
        <div class="table__content__email">
          <span>{{ item.email }}</span>
        </div>
        <div class="table__content__name">
          <span>{{ item.nome }}</span>
        </div>

        <div class="table__content__box">
          <v-icon class="table__content__box__icon"
            >mdi-clipboard-account</v-icon
          >
        </div>
        <div class="table__content__button">
          <v-btn class="btn" @click="deleteItemList(item.id)">excluir</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: "",
      id: "",
    };
  },
  props: {
    students: Array,
  },

  methods: {
    getItemList(item) {
      this.checkbox = item;
      this.$emit("editUser", this.checkbox);
    },
    async deleteItemList(item) {
      this.id = item;
      await this.$http
        .delete(`usuarios/${this.id}.json`)
        .then(() => {
          alert("item apagado");
          this.checkbox = "teste";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__content {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__checkbox {
      width: 5%;
    }
    &__id {
      width: 25%;
    }
    &__email {
      width: 25%;
    }
    &__name {
      width: 25%;
    }
    &__button {
      width: 15%;
      display: flex;
      justify-content: flex-end;
      button {
        background: #ff4500 !important;
        color: #fff;
        font-family: sans-serif;
      }
    }
    &__box {
      width: 5%;

      &__icon {
        font-size: 55px;
      }
    }
  }
  span {
    font-family: sans-serif;
  }
}
</style>
