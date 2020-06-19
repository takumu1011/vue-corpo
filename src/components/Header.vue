<template>
  <header class="l-h">
    <button class="mobile-btn" @click="SlideScreen">
      <span class="mobile-btn__line"></span>
      <span class="mobile-btn__line"></span>
      <span class="mobile-btn__line"></span>
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    SlideScreen() {
      this.$emit('mobile-click');
    }
  }
}
</script>

<style scoped lang="scss">
.l-h {
  position: relative;
  padding: 20px 0;
  background-color: #000;
}
.mobile-btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 50px;
  margin-right: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  &__line {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 8px;
    background-color: #fff;
    transition: all 0.4s ease-in 0s;
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
}
.is-open {
  .mobile-btn {
    &__line {
      &:nth-child(1) {
        top: 10px;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: translateX(-100%);
        opacity: 0;
      }
      &:nth-child(3) {
        top: -10px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>