<template>
  <div class="header">
    <v-btn class="header__button">manter contato</v-btn>
    <span class="header__title">Como você prefere falar com a gente?</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-height: 200px;
  background: #831f9c;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  &__button {
    min-width: 120px;
    background: #fff;
    color: #831f9c;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
  }
  &__title {
    font-size: 42px;
    font-weight: bold;
    color: #ffff;
    font-family: sans-serif;
    margin-right: 40px;
  }
}
</style>
