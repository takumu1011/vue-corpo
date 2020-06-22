<template>
  <div class="overview">
    <h2 class="overview__ttl">Overview</h2>
    <div class="overview__des">
      <h3 class="overview__sub-ttl">sub title</h3>
      <p class="overview__txt">hoge株式会社はテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
      </p>
    </div>
    <ul class="overview__img-list">
      <li class="overview__img-item">
        <img class="overview__pic" src="../assets/sample.png" alt="">
      </li>
      <li class="overview__img-item">
        <img class="overview__pic" src="../assets/sample.png" alt="">
      </li>
      <li class="overview__img-item">
        <img class="overview__pic" src="../assets/sample.png" alt="">
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.overview{
  width: 560px;
  margin: 50px auto;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  &__ttl {
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    outline: 3px solid #000;
  }
  &__sub-ttl {
    width: 60%;
    margin: 0 auto;
    color: #000;
    background-color: rgba(255,255,255,.8);
    border: 1px solid #000;
    border-radius: 20px;
  }
  &__img-list {
    position: relative;
    list-style: none;
    height: 300px;
    margin: 0 auto;
    padding: 0;
    @media screen and (max-width: 768px) {
      display: flex;
      height: auto;
      justify-content: center;
      align-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  &__img-item {
    position: absolute;
    width: 200px;
    height: 200px; 
    border: 2px solid #002222;
    @media screen and (max-width: 768px) {
        position: relative;
        width: 150px;
        height: 150px;
        margin: 20px;
    }
    &:nth-child(1) {
      top: 0;
      left: 50px;
    @media screen and (max-width: 768px) {
      top: auto;
      left: auto;
    }
    }
    &:nth-child(2) {
      top: 0;
      right: 50px;
    @media screen and (max-width: 768px) {
      top: auto;
      right: auto;
    }
    }
    &:nth-child(3) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    @media screen and (max-width: 768px) {
      bottom: auto;
      left: auto;
      transform: none;
    }
    }
  }
  &__pic {   
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.6);
  }
}
</style>