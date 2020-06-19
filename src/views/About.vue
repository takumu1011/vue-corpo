<template>
  <div class="about">
    <ul class="about__list">
      <li class="item" v-for="item in items" :key="item.id">
        <div class="item__up">
          <h3 class="item__ttl">{{ item.ttl }}</h3>
          <button class="item__btn" @click="ShowItem(item.id)">もっと見る</button>
        </div>
        <div class="item__down">
          <p>ほげほげ</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          ttl: 'タイトル1',
          des: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
        },
        {
          id: 2,
          ttl: 'タイトル2',
          des: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
        },
        {
          id: 3,
          ttl: 'タイトル3',
          des: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
        },
        {
          id: 4,
          ttl: 'タイトル4',
          des: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
        },
      ]
    }
  },
  methods: {
    ShowItem(index) {
      let els = document.querySelectorAll('.item__down');
      els[index-1].classList.toggle('show');
    }
  }
}
</script>




<style lang="scss">
.about {
  width: 100%;
  &__list {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.item {
  position: relative;
  width: 100%;
  margin: 20px 0;
  &:nth-child(2n) {
    .item__ttl {
      left: auto;
      right: 5%;
      color: #000;
    }
  }
  &__ttl {
    position: absolute;
    top: 20px;
    left: 5%;
    color: #fff;
    font-size: 24px;
  }
  &__up {
    width: 100%;
    height: 300px;
    background: linear-gradient(55deg, #000, transparent);
  }
  &__down {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 1.2s ease-in 0s;
    &.show {
      position: relative;
      opacity: 1;
    }
  }
  &__btn {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 60px;
    background-color: #fff;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
      transform: scaleX(0);
      transition: transform 0.2s ease-out 0s;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
}

</style>