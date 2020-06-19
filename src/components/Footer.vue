<template>
  <footer class="l-f">
    <div class="l-f__in">
      <p class="copy"><small class="copy__txt">&copy; hoge株式会社</small></p>
    </div>
  </footer>
</template>

<style lang="scss">
  .l-f {
    width: 100%;
    background-color: #000;
    &__in {
      padding: 5px 0;
    }
  }
  .copy {
    &__txt {
      position: relative;
      color: #fff;
      font-size: 12px;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 2px;
        background-color: #fff;
      }
      &::before {
        left: -25px;
      }
      &::after {
        right: -25px;
      }
    }
  }
</style>